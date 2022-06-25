<?php
namespace App\Repositories;

use App\Models\Establishment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;

class Establishments
{
    private Establishment $model;
    public static function init(Establishment $model): Establishments
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): Establishment
    {
        $model = new Establishment((array) $data);
                // Save Relationships
            

        if (isset($data->region)) {
            $model->region()
                ->associate($data->region->id);
        }
                    

        $model->saveOrFail();
        return $model;
    }

    public function show(Request $request): Establishment {
        //Fetch relationships
        $this->model->load(['region']);
        return $this->model;
    }
    
    public function update(object $data): Establishment
    {
        $this->model->update((array) $data);
        
        // Save Relationships
                

        if (isset($data->region)) {
            $this->model->region()
                ->associate($data->region->id);
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
            Column::make("region")->className('min-desktop-lg'),
            Column::make("name")->className('all'),          
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }
    public static function dt($query) {
        if(!\Auth::user()->hasRole("administrator")){
            $query->whereIn('id' ,\Auth::user()->establishments->pluck('id') );
        }
        return DataTables::of($query)
            ->addColumn('region', function (Establishment $model) {
                return $model->region ? $model->region->name : "";
            })
            ->editColumn('actions', function (Establishment $model) {
                $actions = '';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-end'>".$actions."</div>";
            })
            ->rawColumns(['actions'])
            ->make();
    }


}
