<?php
namespace App\Repositories;

use App\Models\Stock;
use App\Models\StockHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;
use Yajra\DataTables\Html\Column;

class StockHistories
{
    private StockHistory $model;
    public static function init(StockHistory $model): StockHistories
    {
        $instance = new self;
        $instance->model = $model;
        return $instance;
    }

    public static function store(object $data): StockHistory
    {
        $model = new StockHistory((array) $data);
                // Save Relationships

        if (isset($data->detaine)) {
            $model->detaine()
                ->associate($data->detaine->id);
        }
        if (isset($data->etab)) {
            $model->etab()
                ->associate($data->etab->id);
        }
        if (isset($data->stock)) {
            $model->stock()
                ->associate($data->stock->id);
        }
        $model->user()
            ->associate(\Auth::user()->id);
        if (isset($data->region)) {
            $model->region()
                ->associate($data->region->id);
        }  
                    

        $model->saveOrFail();
        return $model;
    }

    public function show(Request $request): StockHistory {
        //Fetch relationships
        $this->model->load([
            'detaine',
            'etab',
            'stock',
            'user',
            'region'
        ]);
    return $this->model;
    }
    public function update(object $data): StockHistory
    {
        $this->model->update((array) $data);
        
        // Save Relationships
                

        if (isset($data->detaine)) {
            $this->model->detaine()
                ->associate($data->detaine->id);
        }


        if (isset($data->etab)) {
            $this->model->etab()
                ->associate($data->etab->id);
        }


        if (isset($data->stock)) {
            $this->model->stock()
                ->associate($data->stock->id);
        }


        $this->model->user()
            ->associate(\Auth::user()->id);
        
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
            Column::make("type")->className('min-desktop-lg'),
            Column::make("stock")->className('min-desktop-lg'),
            // Column::make("comment")->className('min-desktop-lg'),
            Column::make("ordonnance")->className('min-desktop-lg')->title('N° Bulletin / N° Ordonnance'),
            Column::make("anything")->className('min-desktop-lg')->title('DR. Etab. Détenu(e) '),
            Column::make("quantite")->className('min-desktop-lg'),
            // Column::make("created_at")->className('min-tv')->title('Date'),
            // Column::make("updated_at")->className('min-tv'),
            Column::make('actions')->className('min-desktop text-right')->orderable(false)->searchable(false),
        ];
        return $columns;
    }

    public static function dt($query) {
        $types = [
            'dr_provenance' => "Provenance de la DR",
            'etab_provenance' => "Provenance d'un établissement",
            'achats' => "Achats",
            'etab_transfere' => "Envoyé à un établissment",
            'consommation' => 'Consommation',
            'detruit' => 'Détruit',
            'update' => 'Mettre à jour direct de stock',
        ];
        return DataTables::of($query)
            ->addColumn('anything' , function(StockHistory $model){
                if($model->type == "dr_provenance")
                    return $model->region ? $model->region->name :"";
                if($model->type == "etab_provenance" || $model->type == "etab_transfere")
                    return $model->etab ? $model->etab->name : "";
                if($model->type == "consommation")
                    return $model->detaine?$model->detaine->title : "";

                return $model->stock ? ($model->stock->estum ? $model->stock->estum->name : "" ) :"";
            })->addColumn('stock' , function(StockHistory $model){
                return $model->stock?($model->stock->medicament?$model->stock->medicament->title : ""):"";
            })
            ->editColumn('type',function(StockHistory $model)use($types){
                return $types[$model->type];
            })
            ->editColumn('actions', function (StockHistory $model) {
                $actions = '';
                if (\Auth::user()->can('view',$model)) $actions .= '<button class="bg-primary hover:bg-primary-600 p-2 px-3 focus:ring-0 focus:outline-none text-white action-button" title="View Details" data-action="show-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-eye"></i></button>';
                // if (\Auth::user()->can('update',$model)) $actions .= '<button class="bg-secondary hover:bg-secondary-600 p-2 px-3 focus:ring-0 focus:outline-none action-button" title="Edit Record" data-action="edit-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-edit"></i></button>';
                if (\Auth::user()->can('delete',$model)) $actions .= '<button class="bg-danger hover:bg-danger-600 p-2 px-3 text-white focus:ring-0 focus:outline-none action-button" title="Delete Record" data-action="delete-model" data-tag="button" data-id="'.$model->id.'"><i class="fas fa-trash"></i></button>';
                return "<div class='gap-x-1 flex w-full justify-end'>".$actions."</div>";
            })
            ->rawColumns(['actions'])
            ->make();
    }
    
    public static function applayFiltters($query , $request){
        
        //Stock Etab Fillter
        $estum_id = $request->get('estum_id');
        if($estum_id){
            $query->join('stocks' , "stock_history.stock_id" , "=" , "stocks.id");
            $query->where('stocks.esta_id' ,"=",$estum_id);
        }

        //Medicament Etab Fillter
        $medicament_id = $request->get('medicament_id');
        if($medicament_id){
            if($estum_id == null){
                $query->join('stocks' , "stock_history.stock_id" , "=" , "stocks.id");
            }
            $query->where('stocks.medicament_id' ,"=",$medicament_id);
        }

        //Type Fillter
        $type = $request->get('type');
        if($type){
            $query->where('stock_history.type' ,"=",$type);
        }

        //Region Fillter
        $region_id = $request->get('region_id');
        if($region_id){
            $query->where('stock_history.region_id' ,"=",$region_id);
        }

        //Etab Fillter
        $etab_id = $request->get('etab_id');
        if($etab_id){
            $query->where('stock_history.etab_id' ,"=",$etab_id);
        }
        
        //Detaine Fillter
        $detaine_id = $request->get('detaine_id');
        if($detaine_id){
            $query->where('stock_history.detaine_id' ,"=",$detaine_id);
        }

        //Stock Fillter
        $stock_id = $request->get('stock_id');
        if($stock_id){
            $query->where('stock_history.stock_id' ,"=",$stock_id);
        }

        //Code Fillter
        $code = $request->get('code');
        $code_condition = $request->get('code_condition');
        if($code){
            $code = $code_condition == "equal" ? $code : "%".$code."%";
            $query->where('stock_history.ordonnance' , "LIKE" , $code);
        }
        
        //Quantite Fillter
        $quantite = $request->get('quantite');
        $condition = $request->get('condition');
        if($quantite != null && $condition != null ){
            $conds = [
                'equal' => '=',
                'higher' => '>',
                'less' => '<',
            ];
            if(array_key_exists($condition , $conds)){
                $query->where('stock_history.quantite' ,$conds[$condition] , $quantite);
            }
        }
        
        /* Date Filtter*/ 
        $date_from = $request->get('date_from');
        $date_to = $request->get('date_to');
        if($date_from && $date_to){
            $query->whereBetween('stock_history.created_at' , [$date_from , $date_to]);
        }

        return $query;
    }

    
    /**
     * Get Cols and data to export 
     */
    public static function toPdf($query , $request){
        $result = self::dt($query);

        $file_title = "Historique des stocks ";
        $columns['id'] = "id";

        $stock_id = $request->get('stock_id');
        if($stock_id != null){
            $stock = Stock::where('id', '=', $stock_id)->firstOrFail();
            $file_title.=" dans ".$stock->estum->name . " ".$stock->title;
        }else{
            $columns['stock'] = "Stock";
        }
        $columns = array_merge($columns , [
            'type' => "Type",
            'ordonnance' => "N°Bulletin / N°Ordonnance",
            'anything' => "DR. Etab. Détenu(e)",
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
