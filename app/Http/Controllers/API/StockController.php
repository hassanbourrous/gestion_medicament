<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\Stock\IndexStock;
use App\Http\Requests\Stock\StoreStock;
use App\Http\Requests\Stock\UpdateStock;
use App\Http\Requests\Stock\DestroyStock;
use App\Models\Stock;
use App\Repositories\Stocks;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Barryvdh\DomPDF\Facade\Pdf;
use Rap2hpoutre\FastExcel\FastExcel;
use Yajra\DataTables\DataTables;

class StockController  extends Controller
{
    private ApiResponse $api;
    private Stocks $repo;
    public function __construct(ApiResponse $apiResponse, Stocks $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexStock $request)
    {
        $query = Stock::query(); // You can extend this however you want.
        // selected_etab
        // medicaments_id
        $selected_etab = $request->get('selected_etab');
        $medicaments_id = $request->get('medicaments_id');
        
        if(($selected_etab && $selected_etab != null) || ($medicaments_id && $medicaments_id != null)){
            if ($selected_etab && $selected_etab != null)
                $query->where('esta_id' ,'=', $selected_etab );
            if ($medicaments_id && $medicaments_id != null)
                $query->where('medicament_id' ,'=', $medicaments_id );
        }else{
            if(!\Auth::user()->hasRole("administrator")){
                $query->whereIn('esta_id' ,\Auth::user()->establishments->pluck('id')->toArray()  );
            }
        }
                
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('date_dexpiration')->title('Date Dexpiration')->sort()->searchable(),
            Column::name('date_production')->title('Date Production')->sort()->searchable(),
            Column::name('quantite')->title('Quantite')->sort()->searchable(),
            Column::name('updated_at')->title('Updated At')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of Stocks")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = Stock::query()->select(Stock::getModel()->getTable().'.*' ); // You can extend this however you want.
        $query = $this->repo::applayFiltters($query , $request);
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreStock $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreStock $request)
    {
        try {
            $data = $request->sanitizedObject();
            $stock = $this->repo::store($data);
            return $this->api->success()->message('Stock Created')->payload($stock)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Stock $stock
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, Stock $stock)
    {
        try {
            if(!\Auth::user()->hasRole("administrator") && !in_array($stock->esta_id , \Auth::user()->establishments->pluck('id')->toArray() ) ){
                throw new AuthorizationException;
            }
            $payload = $this->repo::init($stock)->show($request);
            return $this->api->success()
                        ->message("Stock $stock->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateStock $request
     * @param {$modelBaseName} $stock
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateStock $request, Stock $stock)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($stock)->update($data);
            return $this->api->success()->message("Stock has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Stock $stock
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyStock $request, Stock $stock)
    {
        $res = $this->repo::init($stock)->destroy();
        return $this->api->success()->message("Stock has been deleted")->payload($res)->code(200)->send();
    }

    
    /**
     * Print Stock
     */
    public function print(Request $request){
        try {
            $query = Stock::query()->select(Stock::getModel()->getTable().'.*' ); 
            $query = $this->repo::applayFiltters($query , $request);
            $result = $this->repo::toPdf($query , $request);
            $pdf = PDF::loadView('pdf.pdf-table', $result);
            $pdf->setPaper('a4')->setWarnings(true);
            return $pdf->stream('stock.pdf');
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    
    /**
     * Export Stock
     */
    public function export(Request $request){
        try {
            $query = Stock::query()->select(Stock::getModel()->getTable().'.*' ); 
            $query = $this->repo::applayFiltters($query , $request);
            $result = $this->repo::toPdf($query , $request);

            $file_name = $result["file_title"];
            $columns = $result["columns"];
            return (new FastExcel($result['data']))->download($file_name.'.xlsx', function ($row)use($columns) {
                $x_r = [];
                foreach( $columns as $inx => $col ){
                    $x_r[$col] = strip_tags($row[$inx]);
                }
                return $x_r;
            });

        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

}
