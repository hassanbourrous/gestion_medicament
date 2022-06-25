<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\StockStatus\IndexStockStatus;
use App\Http\Requests\StockStatus\StoreStockStatus;
use App\Http\Requests\StockStatus\UpdateStockStatus;
use App\Http\Requests\StockStatus\DestroyStockStatus;
use App\Models\StockStatus;
use App\Repositories\StockStatuses;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class StockStatusController  extends Controller
{
    private StockStatuses $repo;
    public function __construct(StockStatuses $repo)
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
        $this->authorize('viewAny', StockStatus::class);
        return Inertia::render('StockStatuses/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', StockStatus::class),
                "create" => \Auth::user()->can('create', StockStatus::class),
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
        $this->authorize('create', StockStatus::class);
        return Inertia::render("StockStatuses/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', StockStatus::class),
            "create" => \Auth::user()->can('create', StockStatus::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreStockStatus $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreStockStatus $request)
    {
        try {
            $data = $request->sanitizedObject();
            $stockStatus = $this->repo::store($data);
            return back()->with(['success' => "The Stock Status was created succesfully."]);
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
    * @param StockStatus $stockStatus
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, StockStatus $stockStatus)
    {
        try {
            $this->authorize('view', $stockStatus);
            $model = $this->repo::init($stockStatus)->show($request);
            return Inertia::render("StockStatuses/Show", ["model" => $model]);
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
    * @param StockStatus $stockStatus
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, StockStatus $stockStatus)
    {
        try {
            $this->authorize('update', $stockStatus);
            //Fetch relationships
            

                        return Inertia::render("StockStatuses/Edit", ["model" => $stockStatus]);
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
    * @param UpdateStockStatus $request
    * @param {$modelBaseName} $stockStatus
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateStockStatus $request, StockStatus $stockStatus)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($stockStatus)->update($data);
            return back()->with(['success' => "The StockStatus was updated succesfully."]);
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
    * @param StockStatus $stockStatus
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyStockStatus $request, StockStatus $stockStatus)
    {
        $res = $this->repo::init($stockStatus)->destroy();
        if ($res) {
            return back()->with(['success' => "The StockStatus was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The StockStatus could not be deleted."]);
        }
    }
}
