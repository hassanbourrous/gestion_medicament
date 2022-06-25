<?php
namespace App\Repositories;

use App\Models\Medicament;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;

class Medicaments
{
    private Medicament $model;
    public static function init(Medicament $model): Medicaments
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): Medicament
    {
        $model = new Medicament((array) $data);
                // Save Relationships
            

        if (isset($data->category)) {
            $model->category()
                ->associate($data->category->id);
        }
                    

        $model->saveOrFail();
        return $model;
    }

    public function show(Request $request): Medicament {
        //Fetch relationships
                $this->model->load([
            'category',
        ]);
    return $this->model;
    }
    public function update(object $data): Medicament
    {
        $this->model->update((array) $data);
        
        // Save Relationships
                

        if (isset($data->category)) {
            $this->model->category()
                ->associate($data->category->id);
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
            Column::make("category")->className('min-desktop-lg'),
            Column::make("dosage")->className('min-desktop-lg'),
            Column::make("nom_commercial")->className('min-desktop-lg'),
            Column::make("presentation")->className('min-desktop-lg'),
            Column::make("ref")->className('min-desktop-lg'),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }
    public static function dt($query) {
        return DataTables::of($query)
            ->addColumn('category' , function(Medicament $model){
                return $model->category ? $model->category->name : "";
            })
            ->editColumn('actions', function (Medicament $model) {
                $actions = '';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-end'>".$actions."</div>";
            })
            ->rawColumns(['actions'])
            ->make();
    }
    
    public static function applayFiltters($query , $request){
        
        $category_id = $request->get('category_id');
        $ref = $request->get('ref');
        $ref_condition = $request->get('ref_condition');

        if($category_id){
            $query->where('category_id' , '=' , $category_id);
        }

        if($ref){
            $ref = $ref_condition == "equal" ? $ref : "%".$ref."%";
            $query->where('ref' , "LIKE" , $ref);
        }

        return $query;
    }
}
