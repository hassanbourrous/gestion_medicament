<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\StockHistory\IndexStockHistory;
use App\Http\Requests\StockHistory\StoreStockHistory;
use App\Http\Requests\StockHistory\UpdateStockHistory;
use App\Http\Requests\StockHistory\DestroyStockHistory;
use App\Models\StockHistory;
use App\Repositories\StockHistories;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;
use Barryvdh\DomPDF\Facade\Pdf;
use Rap2hpoutre\FastExcel\FastExcel;

class StockHistoryController  extends Controller
{
    private ApiResponse $api;
    private StockHistories $repo;
    public function __construct(ApiResponse $apiResponse, StockHistories $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexStockHistory $request)
    {
        $query = StockHistory::query(); // You can extend this however you want.
       
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('type')->title('Type')->sort()->searchable(),
            Column::name('comment')->title('Comment')->sort()->searchable(),
            Column::name('ordonnance')->title('Ordonnance')->sort()->searchable(),
            Column::name('quantite')->title('Quantite')->sort()->searchable(),
            Column::name('updated_at')->title('Updated At')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of StockHistories")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = StockHistory::query()->select(StockHistory::getModel()->getTable().'.*'); // You can extend this however you want.
        
        $query = $this->repo::applayFiltters($query , $request);
       
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreStockHistory $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreStockHistory $request)
    {
        try {
            $data = $request->sanitizedObject();
            $stockHistory = $this->repo::store($data);
            return $this->api->success()->message('Stock History Created')->payload($stockHistory)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param StockHistory $stockHistory
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, StockHistory $stockHistory)
    {
        try {
            $payload = $this->repo::init($stockHistory)->show($request);
            return $this->api->success()
                        ->message("Stock History $stockHistory->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateStockHistory $request
     * @param {$modelBaseName} $stockHistory
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateStockHistory $request, StockHistory $stockHistory)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($stockHistory)->update($data);
            return $this->api->success()->message("Stock History has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param StockHistory $stockHistory
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyStockHistory $request, StockHistory $stockHistory)
    {
        $res = $this->repo::init($stockHistory)->destroy();
        return $this->api->success()->message("Stock History has been deleted")->payload($res)->code(200)->send();
    }

    
    /**
     * Print Stock
     */
    public function print(Request $request){
        try {
            $query = StockHistory::query()->select(StockHistory::getModel()->getTable().'.*'); // You can extend this however you want.
            $query = $this->repo::applayFiltters($query , $request);
            $result = $this->repo::toPdf($query , $request);
            $pdf = PDF::loadView('pdf.pdf-table', $result);
            $pdf->setPaper('a4')->setWarnings(true);
            return $pdf->stream('stock-history.pdf');
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
            $query = StockHistory::query()->select(StockHistory::getModel()->getTable().'.*' ); 
            $query = $this->repo::applayFiltters($query , $request);
            $result = $this->repo::toPdf($query , $request);

            $file_name = $result["file_title"];
            $columns = $result["columns"];
            return (new FastExcel($result['data']))->download($file_name.'.xlsx', function ($row)use($columns) {
                $x_r = [];
                foreach( $columns as $inx => $col ){
                    $x_r[$inx] = strip_tags($row[$inx]);
                }
                return $x_r;
            });

        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }
}
