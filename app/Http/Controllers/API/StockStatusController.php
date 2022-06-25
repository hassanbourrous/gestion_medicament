<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\StockStatus\IndexStockStatus;
use App\Http\Requests\StockStatus\StoreStockStatus;
use App\Http\Requests\StockStatus\UpdateStockStatus;
use App\Http\Requests\StockStatus\DestroyStockStatus;
use App\Models\StockStatus;
use App\Repositories\StockStatuses;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class StockStatusController  extends Controller
{
    private ApiResponse $api;
    private StockStatuses $repo;
    public function __construct(ApiResponse $apiResponse, StockStatuses $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexStockStatus $request)
    {
        $query = StockStatus::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('name')->title('Name')->sort()->searchable(),
            Column::name('color')->title('Color')->sort()->searchable(),
            Column::name('period')->title('Period')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of StockStatuses")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = StockStatus::query()->select(StockStatus::getModel()->getTable().'.*'); // You can extend this however you want.
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreStockStatus $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreStockStatus $request)
    {
        try {
            $data = $request->sanitizedObject();
            $stockStatus = $this->repo::store($data);
            return $this->api->success()->message('Stock Status Created')->payload($stockStatus)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param StockStatus $stockStatus
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, StockStatus $stockStatus)
    {
        try {
            $payload = $this->repo::init($stockStatus)->show($request);
            return $this->api->success()
                        ->message("Stock Status $stockStatus->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateStockStatus $request
     * @param {$modelBaseName} $stockStatus
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateStockStatus $request, StockStatus $stockStatus)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($stockStatus)->update($data);
            return $this->api->success()->message("Stock Status has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param StockStatus $stockStatus
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyStockStatus $request, StockStatus $stockStatus)
    {
        $res = $this->repo::init($stockStatus)->destroy();
        return $this->api->success()->message("Stock Status has been deleted")->payload($res)->code(200)->send();
    }

}
