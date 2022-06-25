<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\Establishment\IndexEstablishment;
use App\Http\Requests\Establishment\StoreEstablishment;
use App\Http\Requests\Establishment\UpdateEstablishment;
use App\Http\Requests\Establishment\DestroyEstablishment;
use App\Models\Establishment;
use App\Repositories\Establishments;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class EstablishmentController  extends Controller
{
    private ApiResponse $api;
    private Establishments $repo;
    public function __construct(ApiResponse $apiResponse, Establishments $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexEstablishment $request)
    {
        $get_all_etab = $request->get('all');
        $deferent_then = $request->get('deferent_then');

        $query = Establishment::query(); // You can extend this however you want.
        
        if($get_all_etab && $deferent_then != null){
            $query->where('id' ,'<>', $deferent_then );
        }else{
            if(!\Auth::user()->hasRole("administrator")){
                $query->whereIn('id' ,\Auth::user()->establishments->pluck('id')->toArray() );
            }
        }
       
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('name')->title('Name')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of Establishments")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = Establishment::query()->select(Establishment::getModel()->getTable().'.*'); // You can extend this however you want.
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreEstablishment $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreEstablishment $request)
    {
        try {
            $data = $request->sanitizedObject();
            $establishment = $this->repo::store($data);
            return $this->api->success()->message('Establishment Created')->payload($establishment)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Establishment $establishment
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, Establishment $establishment)
    {
        try {
            if(!\Auth::user()->hasRole("administrator") && !in_array($establishment->id , \Auth::user()->establishments->pluck('id')->toArray() ) ){
                throw new AuthorizationException;
            }
            $payload = $this->repo::init($establishment)->show($request);
            return $this->api->success()
                        ->message("Establishment $establishment->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateEstablishment $request
     * @param {$modelBaseName} $establishment
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateEstablishment $request, Establishment $establishment)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($establishment)->update($data);
            return $this->api->success()->message("Establishment has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Establishment $establishment
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyEstablishment $request, Establishment $establishment)
    {
        $res = $this->repo::init($establishment)->destroy();
        return $this->api->success()->message("Establishment has been deleted")->payload($res)->code(200)->send();
    }

}
