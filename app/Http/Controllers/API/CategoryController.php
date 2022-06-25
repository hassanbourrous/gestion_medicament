<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Http\Requests\Category\IndexCategory;
use App\Http\Requests\Category\StoreCategory;
use App\Http\Requests\Category\UpdateCategory;
use App\Http\Requests\Category\DestroyCategory;
use App\Models\Category;
use App\Repositories\Categories;
use Illuminate\Http\Request;
use Savannabits\JetstreamInertiaGenerator\Helpers\ApiResponse;
use Savannabits\Pagetables\Column;
use Savannabits\Pagetables\Pagetables;
use Yajra\DataTables\DataTables;

class CategoryController  extends Controller
{
    private ApiResponse $api;
    private Categories $repo;
    public function __construct(ApiResponse $apiResponse, Categories $repo)
    {
        $this->api = $apiResponse;
        $this->repo = $repo;
    }

    /**
     * Display a listing of the resource (paginated).
     * @return columnsToQuery \Illuminate\Http\JsonResponse
     */
    public function index(IndexCategory $request)
    {
        $query = Category::query(); // You can extend this however you want.
        $cols = [
            Column::name('id')->title('Id')->sort()->searchable(),
            Column::name('name')->title('Name')->sort()->searchable(),
            
            Column::name('actions')->title('')->raw()
        ];
        $data = Pagetables::of($query)->columns($cols)->make(true);
        return $this->api->success()->message("List of Categories")->payload($data)->send();
    }

    public function dt(Request $request) {
        $query = Category::query()->select(Category::getModel()->getTable().'.*'); // You can extend this however you want.
        return $this->repo::dt($query);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param StoreCategory $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreCategory $request)
    {
        try {
            $data = $request->sanitizedObject();
            $category = $this->repo::store($data);
            return $this->api->success()->message('Category Created')->payload($category)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->payload([])->code(500)->send();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, Category $category)
    {
        try {
            $payload = $this->repo::init($category)->show($request);
            return $this->api->success()
                        ->message("Category $category->id")
                        ->payload($payload)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->message($exception->getMessage())->send();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateCategory $request
     * @param {$modelBaseName} $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdateCategory $request, Category $category)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($category)->update($data);
            return $this->api->success()->message("Category has been updated")->payload($res)->code(200)->send();
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return $this->api->failed()->code(400)->message($exception->getMessage())->send();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Category $category
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(DestroyCategory $request, Category $category)
    {
        $res = $this->repo::init($category)->destroy();
        return $this->api->success()->message("Category has been deleted")->payload($res)->code(200)->send();
    }

}
