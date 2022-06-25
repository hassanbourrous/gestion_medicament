<?php
namespace App\Repositories;

use App\Models\Detainee;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;

class Detainees
{
    private Detainee $model;
    public static function init(Detainee $model): Detainees
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): Detainee
    {
        $model = new Detainee((array) $data);
        // Save Relationships
        

        if (isset($data->establishment)) {
            $model->establishment()->associate($data->establishment->id);
        }

        $model->saveOrFail();

        if (isset($data->photo)) {
            $model->updateProfilePhoto($data->photo);
        }
        return $model;
    }

    public function show(Request $request): Detainee {
        //Fetch relationships
        $this->model->load(['establishment']);

        return $this->model;
    }

    public function update(object $data): Detainee
    {
        $this->model->update((array) $data);
        
        // Save Relationships
        if (isset($data->establishment)) {
            $this->model->establishment()
                ->associate($data->establishment->id);
        }

        if (isset($data->photo)) {
            $this->model->updateProfilePhoto($data->photo);
        }
        $this->model->saveOrFail();
        return $this->model;
    }

    
    public function updateProfilePhoto(object $photo): Detainee
    {
        if (isset($photo)) {
            $this->model->updateProfilePhoto($photo);
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
            Column::make("photo")->className('min-desktop-lg'),
            Column::make("first_name")->className('min-desktop-lg'),
            Column::make("last_name")->className('min-desktop-lg'),
            Column::make("establishment")->className('min-desktop-lg'),
            Column::make("cin")->className('min-desktop-lg'),
            Column::make("code")->className('min-desktop-lg'),
            Column::make("birthday")->className('min-desktop-lg'),
            // Column::make("created_at")->className('min-tv'),
            // Column::make("updated_at")->className('min-tv'),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }
    public static function dt($query) {
        if(!\Auth::user()->hasRole("administrator")){
            $query->whereIn('esta_id' ,\Auth::user()->establishments->pluck('id') );
        }
        return DataTables::of($query)
            ->addColumn('establishment', function (Detainee $model) {
                return $model->establishment ? $model->establishment->name : "";
            })
            ->editColumn('photo', function(Detainee $model) {
                return '<img src="'.$model->profile_photo_url.'"/ alt="'.$model->first_name.'" class="rounded-full h-10 w-10 object-cover">';
            })
            ->editColumn('actions', function (Detainee $model) {
                $actions = '';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-end'>".$actions."</div>";
            })
            ->rawColumns(['actions','photo'])
            ->make();
    }
}
