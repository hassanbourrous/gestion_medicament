<?php
namespace App\Repositories;

use App\Models\Establishment;
use App\Models\Stock;
use App\Models\StockStatus;
use App\Models\StockHistory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;

class Stocks
{
    private Stock $model;
    public static function init(Stock $model): Stocks
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): Stock
    {
        //check if stock of the same mid and exp date exist in the etablisment 
        //TODO
        if($data->type == "dr_provenance" || $data->type == "etab_provenance" || $data->type == "achats" ){

            $saved_stock = Stock::where('esta_id' ,'=' , $data->estum->id)
            ->where('medicament_id' , '=' , $data->medicament->id)
            ->where('date_dexpiration' , '=' , $data->date_dexpiration)->first();

            if($saved_stock){
                $model = $saved_stock;
                $model->quantite += $data->quantite;
            }else{
                $model = new Stock((array) $data);
                // Save Relationships    
                if (isset($data->estum)) {
                    $model->estum()
                        ->associate($data->estum->id);
                }
                if (isset($data->medicament)) {
                    $model->medicament()
                        ->associate($data->medicament->id);
                }         
            }
            $model->saveOrFail();
            $hs_data = $data;
            $hs_data->stock = $model;
            $stock_history = StockHistories::store($hs_data);

        }elseif($data->type == "etab_transfere" || $data->type == "consommation" || $data->type == "detruit" ){
            //todo Trasfier request in case of etab_transfere
            $model = Stock::findOrFail($data->stock->id);
            if($model->quantite >= $data->quantite){
                $model->quantite = $model->quantite - $data->quantite;
                //save Stock History 
                $model->saveOrFail();

                $stock_history = StockHistories::store($data);
                // $stock_history->saveOrFail();

            }else{
                throw new \Exception('The Selected quantity is not available !');
            }
        }
        return $model;
    }

    public function show(Request $request): Stock {
        //Fetch relationships
        $this->model->load([
            'estum',
            'medicament',
        ]);
        return $this->model;
    }

    public function update(object $data): Stock{
        $oldQuantity = $this->model->quantite;
        $this->model->update((array) $data);
        
        // Save Relationships

        if (isset($data->estum)) {
            $this->model->estum()
                ->associate($data->estum->id);
        }


        if (isset($data->medicament)) {
            $this->model->medicament()
                ->associate($data->medicament->id);
        }
                

        $this->model->saveOrFail();
        
        $comment = 'Update data';
        $newQuantite = 0;
        if($oldQuantity != $this->model->quantite){
            $newQuantite = $this->model->quantite - $oldQuantity ;
            $comment = 'Update quantite from '.$oldQuantity.' to '.$this->model->quantite;
        }
        $hs_data = (object)[
            'type'=> 'update', 
            'quantite'=> $newQuantite, 
            'ordonnance'=> '', 
            'stock_id'=> $this->model->id, 
            'comment'=> $comment,
        ];
        $hs_data->stock = $this->model;
        $stock_history = StockHistories::store($hs_data);
        return $this->model;
    }

    public function destroy(): bool
    {
        return !!$this->model->delete();
    }

    public static function dtColumns() {
        $columns = [
            Column::make('id')->title('ID')->className('all text-right'),
            Column::make("Etablissement")->className('min-desktop-lg'),
            Column::make("medicament")->className('min-desktop-lg'),
            // Column::make("date_production")->className('min-desktop-lg'),
            Column::make("date_dexpiration")->className('min-desktop-lg'),
            // Column::make("created_at")->className('min-tv'),
            Column::make("Status")->className('min-desktop-lg'),
            Column::make("quantite")->className('min-desktop-lg'),
            // Column::make("updated_at")->className('min-tv'),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }

    public static function dt($query ){
        if(!\Auth::user()->hasRole("administrator")){
            $query->whereIn('esta_id' ,\Auth::user()->establishments->pluck('id') );
        }
        $stock_status = StockStatus::all('name' , 'period','color')->sortBy('period');
        // $collection = $query->get();
        return DataTables::of($query)
            ->addColumn('Status' , function(Stock $model)use($stock_status){
                $this_month = Carbon::now()->floorMonth();
                $date_dexpiration = Carbon::parse($model->date_dexpiration)->floorMonth();
                
                if($date_dexpiration > $this_month )
                    $diff = $date_dexpiration->diffInMonths($this_month);  
                else
                    $diff = 0;
                foreach($stock_status as $st){
                    if($diff <= $st->period){
                        return '<span class="p-2 text-white rounded-lg '.$st->color.' ">'.$st->name.'['.$diff.']</span>';
                    }
                }
                if($diff>0 && $model->quantite <=0){
                    return '<span class="p-2 text-white rounded-lg bg-pink-500 "> No Stock</span>';
                }
                $last_ss = $stock_status->last();
                return '<span class="p-2 text-white rounded-lg '.$last_ss->color.' ">'.$last_ss->name.'['.$diff.']</span>';
            })
            ->addColumn('Etablissement' , function(Stock $model){
                // if($model->estum)
                    // return $model->estum->region ? $model->estum->region->name." ". $model->estum->name : $model->estum->name;
                return $model->estum ? $model->estum->name : "";
            })
            ->addColumn('medicament' , function(Stock $model){
                return $model->medicament ? $model->medicament->title: "";
            })
            ->editColumn('actions', function (Stock $model) {
                $actions = '';
                if (\Auth::user()->can('create',$model)) $actions .= '<button class="bg-success hover:bg-success-500 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="Gérer le stock" data-action="manage-stock" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-box-open"></i></button>';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-purple-500 hover:bg-purple-500 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View History" data-action="show-history" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-history"></i></button>';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-center'>".$actions."</div>";
            })
            ->rawColumns(['actions' , "Status"])
            ->make();
    }

    public static function applayFiltters($query , $request){
        
        $date_dexpiration_from = $request->get('date_dexpiration_from');
        $date_dexpiration_to = $request->get('date_dexpiration_to');
        if($date_dexpiration_from != null && $date_dexpiration_to != null  &&  $date_dexpiration_to > $date_dexpiration_from){
            $query->whereBetween(Stock::getModel()->getTable().'.date_dexpiration' , [$date_dexpiration_from , $date_dexpiration_to]);
        }

        $status_period = $request->get('status_period');
        if($status_period != null){
            if((int)$status_period >= 7 ){
                $time = strtotime("now");
                $final = date("Y-m-d", strtotime("+".$status_period." month", $time));
                $query->where(Stock::getModel()->getTable().'.date_dexpiration' , '>=' , $final);
            }elseif((int)$status_period > 0 ){
                $time = strtotime("now");
                $final = date("Y-m-d", strtotime("+".$status_period." month", $time));
                $query->whereBetween(Stock::getModel()->getTable().'.date_dexpiration' , [date("Y-m-d") , $final]);
            }else{
                $query->where(Stock::getModel()->getTable().'.date_dexpiration' , '<=' , date("Y-m-d"));
            }
        }

        $estum_id = $request->get('estum_id');
        if($estum_id != null){
            $query->where('esta_id' , "=" , $estum_id);
        }

        $medicament_id = $request->get('medicament_id');
        if($medicament_id != null){
            $query->where('medicament_id' , "=" , $medicament_id);
        }
        $quantite = $request->get('quantite');
        $condition = $request->get('condition');
        if($quantite != null && $condition != null ){
            $conds = [
                'equal' => '=',
                'higher' => '>',
                'less' => '<',
            ];
            if(array_key_exists($condition , $conds)){
                $query->where('quantite' ,$conds[$condition] , $quantite);
            }
        }

        return $query;
    }

    /**
     * Get Cols and data to export 
     */
    public static function toPdf($query , $request){
        $result = self::dt($query);

        $file_title = "Liste des stock";
        $columns['id'] = "id";

        $estum_id = $request->get('estum_id');
        if($estum_id != null){
            $estum = Establishment::where('id', '=', $estum_id)->firstOrFail();
            $file_title.=" dans ".$estum->name;
        }else{
            $columns['Etablissement'] = "Établissements";
        }
        $columns = array_merge($columns , [
            'medicament' => "Médicaments",
            'date_dexpiration' => "date_dexpiration",
            'Status' => "Status",
            'quantite' => "quantite"
        ]);
        
        $data = [];

        if($result){
            if($result->original){
                if(array_key_exists('data' , $result->original)){
                    $data = $result->original['data'];
                }
            }
        }
        return [ 
            'file_title' => $file_title ,
            'columns'=>$columns ,
            'data'=>$data
       ];
    }
}
