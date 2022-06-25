<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\Region\IndexRegion;
use App\Http\Requests\Region\StoreRegion;
use App\Http\Requests\Region\UpdateRegion;
use App\Http\Requests\Region\DestroyRegion;
use App\Models\Region;
use App\Repositories\Regions;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class RegionController  extends Controller
{
    private ApiResponse $api;
    private Regions $repo;
    public function __construct(ApiResponse $apiResponse, Regions $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexRegion $request)
    {
        $query = Region::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('name')->title('Name')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of Regions")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = Region::query()->select(Region::getModel()->getTable().'.*'); // You can extend this however you want.
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRegion $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRegion $request)
    {
        try {
            $data = $request->sanitizedObject();
            $region = $this->repo::store($data);
            return $this->api->success()->message('Region Created')->payload($region)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Region $region
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, Region $region)
    {
        try {
            $payload = $this->repo::init($region)->show($request);
            return $this->api->success()
                        ->message("Region $region->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRegion $request
     * @param {$modelBaseName} $region
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateRegion $request, Region $region)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($region)->update($data);
            return $this->api->success()->message("Region has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Region $region
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyRegion $request, Region $region)
    {
        $res = $this->repo::init($region)->destroy();
        return $this->api->success()->message("Region has been deleted")->payload($res)->code(200)->send();
    }

}
