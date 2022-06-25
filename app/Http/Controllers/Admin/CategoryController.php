<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\Category\IndexCategory;
use App\Http\Requests\Category\StoreCategory;
use App\Http\Requests\Category\UpdateCategory;
use App\Http\Requests\Category\DestroyCategory;
use App\Models\Category;
use App\Repositories\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class CategoryController  extends Controller
{
    private Categories $repo;
    public function __construct(Categories $repo)
    {
        $this->repo = $repo;
    }

    /**
    * Display a listing of the resource.
    *
    * @param  Request $request
    * @return    \Inertia\Response
    * @throws  \Illuminate\Auth\Access\AuthorizationException
    */
    public function index(Request $request): \Inertia\Response
    {
        $this->authorize('viewAny', Category::class);
        return Inertia::render('Categories/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', Category::class),
                "create" => \Auth::user()->can('create', Category::class),
            ],
            "columns" => $this->repo::dtColumns(),
        ]);
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return  \Inertia\Response
    */
    public function create()
    {
        $this->authorize('create', Category::class);
        return Inertia::render("Categories/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', Category::class),
            "create" => \Auth::user()->can('create', Category::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreCategory $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreCategory $request)
    {
        try {
            $data = $request->sanitizedObject();
            $category = $this->repo::store($data);
            return back()->with(['success' => "The Category was created succesfully."]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }

    /**
    * Display the specified resource.
    *
    * @param Request $request
    * @param Category $category
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, Category $category)
    {
        try {
            $this->authorize('view', $category);
            $model = $this->repo::init($category)->show($request);
            return Inertia::render("Categories/Show", ["model" => $model]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }

    /**
    * Show Edit Form for the specified resource.
    *
    * @param Request $request
    * @param Category $category
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, Category $category)
    {
        try {
            $this->authorize('update', $category);
            //Fetch relationships
            

                        return Inertia::render("Categories/Edit", ["model" => $category]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }

    /**
    * Update the specified resource in storage.
    *
    * @param UpdateCategory $request
    * @param {$modelBaseName} $category
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateCategory $request, Category $category)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($category)->update($data);
            return back()->with(['success' => "The Category was updated succesfully."]);
        } catch (\Throwable $exception) {
            \Log::error($exception);
            return back()->with([
                'error' => $exception->getMessage(),
            ]);
        }
    }

    /**
    * Remove the specified resource from storage.
    *
    * @param Category $category
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyCategory $request, Category $category)
    {
        $res = $this->repo::init($category)->destroy();
        if ($res) {
            return back()->with(['success' => "The Category was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The Category could not be deleted."]);
        }
    }
}
