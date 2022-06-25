<?php
namespace App\Repositories;

use App\Models\Establishment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;
use \Spatie\Permission\Models\Role;

class Users
{
    private User $model;
    public static function init(User $model): Users
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): User
    {
        $model = new User((array) $data);
                // Save Relationships
        if ( $data->password) {
            $model->password = \Hash::make($data->password);
        }
        $model->saveOrFail();
        
        
        if (isset($data->photo)) {
            $model->updateProfilePhoto($data->photo);
        }
        
        if (isset($data->role)) {
            $role = Role::whereId($data->role)->firstOrFail();
            $model->assignRole([$role]);
        }

        // $assignedRoles = collect($data->assigned_roles)->where("checked", true)->pluck('name');
        return $model;
    }

    public function show(Request $request): User {
        //Fetch relationships
        $this->model->load(['roles']);
        return $this->model;
    }
    public function update(object $data): User
    {
        $this->model->update((array) $data);
        
        // Save Relationships
                        

        if (isset($data->password) && $data->password) {
            $this->model->password = \Hash::make($data->password);
        }
        $this->model->saveOrFail();
        return $this->model;
    }

    public function destroy(): bool
    {
        return !!$this->model->delete();
    }

    public static function dtColumns() {
        $columns = [
            Column::make('id')->title('ID')->className('all text-right'),
            Column::make("photo")->className('min-desktop-lg')->orderable(false)->searchable(false),
            Column::make("name")->className('all'),
            Column::make("email")->className('min-desktop-lg'),
            Column::make("roles")->className('min-desktop-lg')->orderable(false)->searchable(false),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }

    public static function dt($query) {
        return DataTables::of($query)
            ->editColumn('roles', function(User $model) {
                return $model->roles->implode('name', ', ');
            })
            ->editColumn('photo', function(User $model) {
                return '<img src="'.$model->profile_photo_url.'"/ alt="'.$model->name.'" class="rounded-full h-10 w-10 object-cover">';
            })
            ->editColumn('actions', function (User $model) {
                $actions = '';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-end'>".$actions."</div>";
            })
            ->rawColumns(['actions','photo'])
            ->make();
    }

    public function assignRole(array $data): bool {
        $role = Role::whereName($data['name'])->firstOrFail();
        if ($data['checked']) {
            $this->model->assignRole([$role]);
        } else  {
            if ($this->model->hasRole($role->name)) {
                $this->model->removeRole($role);
            }
        }
        return $this->model->hasRole($role->name);
    }
    
    public function updateProfilePhoto(object $photo): User
    {
        if (isset($photo)) {
            $this->model->updateProfilePhoto($photo);
        }
        $this->model->saveOrFail();
        return $this->model;
    }

    public function assignEstablishment(array $data): bool {
        try{
            $esta = Establishment::whereId($data['id'])->firstOrFail();
            if($this->model->establishments->contains($esta)){
                $this->model->establishments()->detach($esta);
                return false;
            }else{
                $this->model->establishments()->sync($esta, false);
                // $this->model->load('establishments');
                return true;
            }
            
        }catch(\Exception $ex){
            return false;
        }
    }

    public static function applayFiltters($query , $request){
        $role_id = $request->get('role_id');
        if($role_id){
            $query->whereHas('roles', function($q)use($role_id){
                $q->where('id', '=', $role_id);
            });
        }
        return $query;
    }
}
