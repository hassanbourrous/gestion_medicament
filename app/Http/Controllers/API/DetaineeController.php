<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\Detainee\IndexDetainee;
use App\Http\Requests\Detainee\StoreDetainee;
use App\Http\Requests\Detainee\UpdateDetainee;
use App\Http\Requests\Detainee\DestroyDetainee;
use App\Models\Detainee;
use App\Repositories\Detainees;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Illuminate\Support\Facades\Validator;


class DetaineeController  extends Controller
{
    private ApiResponse $api;
    private Detainees $repo;
    public function __construct(ApiResponse $apiResponse, Detainees $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexDetainee $request)
    {
        $selected_etab = $request->get('selected_etab');
        $query = Detainee::query(); // You can extend this however you want.
        

        if($selected_etab && $selected_etab != null){
            $query->where('esta_id' ,'=', $selected_etab );
        }else{
            if(!\Auth::user()->hasRole("administrator")){
                $query->whereIn('esta_id' ,\Auth::user()->establishments->pluck('id')->toArray() );
            }
        }
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('first_name')->title('First Name')->sort()->searchable(),
            Column::name('last_name')->title('Last Name')->sort()->searchable(),
            Column::name('cin')->title('Cin')->sort()->searchable(),
            Column::name('code')->title('Code')->sort()->searchable(),
            Column::name('profile_photo_path')->title('Profile Photo Path')->sort()->searchable(),
            Column::name('birthday')->title('Birthday')->sort()->searchable(),
            Column::name('updated_at')->title('Updated At')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of Detainees")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = Detainee::query()->select(Detainee::getModel()->getTable().'.*'); // You can extend this however you want.
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreDetainee $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreDetainee $request)
    {
        try {
            $data = $request->sanitizedObject();
            $detainee = $this->repo::store($data);
            return $this->api->success()->message('Detainee Created')->payload($detainee)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Detainee $detainee
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, Detainee $detainee)
    {
        try {
            if(!\Auth::user()->hasRole("administrator") && !in_array($detainee->esta_id , \Auth::user()->establishments->pluck('id')->toArray() ) ){
                throw new AuthorizationException();
            }
            $payload = $this->repo::init($detainee)->show($request);
            return $this->api->success()
                        ->message("Detainee $detainee->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateDetainee $request
     * @param {$modelBaseName} $detainee
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateDetainee $request, Detainee $detainee)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($detainee)->update($data);
            return $this->api->success()->message("Detainee has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
    * photoUpdate the specified resource in storage.
    *
    * @param Request $request
    * @param {$modelBaseName} $id
    * @return \Illuminate\Http\RedirectResponse
    */
    public function photoUpdate(Request $request,$id)
    {
        try {
            $detainee = Detainee::where('id',$id)->first();
            Validator::make($request->toArray(), [
                'photo' => ['nullable', 'mimes:jpg,jpeg,png', 'max:1024'],
            ])->validateWithBag('addDetaineePhoto');
            if (isset($request['photo'])) {
                $res = $this->repo::init($detainee)->updateProfilePhoto($request['photo']);
                return $this->api->success()->message("The Detainee photo was updated succesfully.")->payload($res)->code(200)->send();
            }
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param Detainee $detainee
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyDetainee $request, Detainee $detainee)
    {
        $res = $this->repo::init($detainee)->destroy();
        return $this->api->success()->message("Detainee has been deleted")->payload($res)->code(200)->send();
    }

}
