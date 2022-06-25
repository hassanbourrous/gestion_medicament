<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\IndexUser;
use App\Http\Requests\User\StoreUser;
use App\Http\Requests\User\UpdateUser;
use App\Http\Requests\User\DestroyUser;
use App\Models\User;
use App\Repositories\Users;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\Validator;

class UserController  extends Controller
{
    private $api;
    private Users $repo;
    public function __construct(ApiResponse $apiResponse, Users $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @retcolumnsToQueryurn \Illuminate\Http\JsonResponse
     */
    public function index(IndexUser $request)
    {
        $role = $request->get('role');
        $query = User::query(); // You can extend this however you want.
        if($role && $role != null){
            $query->whereHas(
                'roles', function($q) use($role){
                    $q->where('name', $role);
                }
            );
        }
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('name')->title('Name')->sort()->searchable(),
            Column::name('email')->title('Email')->sort()->searchable(),
            Column::name('profile_photo_path')->title('Profile Photo Path')->sort()->searchable(),
            Column::name('email_verified_at')->title('Email Verified At')->sort()->searchable(),
            Column::name('updated_at')->title('Updated At')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of Users")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = User::query()->select(User::getModel()->getTable().'.*'); // You can extend this however you want.
        $query = $this->repo::applayFiltters($query , $request);
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreUser $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreUser $request)
    {
        try {
            $data = $request->sanitizedObject();
            $user = $this->repo::store($data);
            return $this->api->success()->message('User Created')->payload($user)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, User $user)
    {
        try {
            $payload = $this->repo::init($user)->show($request);
            return $this->api->success()
                        ->message("User $user->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateUser $request
     * @param {$modelBaseName} $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateUser $request, User $user)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($user)->update($data);
            return $this->api->success()->message("User has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyUser $request, User $user)
    {
        $res = $this->repo::init($user)->destroy();
        return $this->api->success()->message("User has been deleted")->payload($res)->code(200)->send();
    }


    public function assignRole(Request $request, User $user): \Illuminate\Http\JsonResponse
    {
        $this->authorize('update',$user);
        $validated = $request->validate([
            'role' => ["required","array"],
            'role.id' =>['required','numeric'],
            'role.checked' =>['required','boolean']
        ]);
        if (\Auth::id() === $user->id && $validated["role"]["name"] ==='administrator') {
            return $this->api->failed()->message("Possible Accidental Self-lockout or self-assignment of admin? We have prevented this assignment")->code(403)->send();
        }
        $res = $this->repo::init($user)->assignRole($validated['role']);
        return $this->api->success()->message("Role assignment updated")->payload($res)->send();
    }
    

    /**
     * The API Function
     * @throws  AuthorizationException
     */
    public function assignEstablishment(Request $request, User $user): \Illuminate\Http\JsonResponse
    {
        $this->authorize('update',$user);
        $validated = $request->validate([
            'establishment' => ["required","array"],
            'establishment.id' =>['required','numeric'],
            'establishment.checked' =>['required','boolean']
        ]);
        $res = $this->repo::init($user)->assignEstablishment($validated['establishment']);
        return $this->api->success()->message("Establishment assignment updated")->payload($res)->send();
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
            $user = User::where('id',$id)->first();
            Validator::make($request->toArray(), [
                'photo' => ['nullable', 'mimes:jpg,jpeg,png', 'max:1024'],
            ])->validateWithBag('addUserPhoto');
            if (isset($request['photo'])) {
                $res = $this->repo::init($user)->updateProfilePhoto($request['photo']);
                return $this->api->success()->message("The User photo was updated succesfully.")->payload($res)->code(200)->send();
            }
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

}
