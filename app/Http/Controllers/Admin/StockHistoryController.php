<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\StockHistory\IndexStockHistory;
use App\Http\Requests\StockHistory\StoreStockHistory;
use App\Http\Requests\StockHistory\UpdateStockHistory;
use App\Http\Requests\StockHistory\DestroyStockHistory;
use App\Models\StockHistory;
use App\Models\Stock;
use App\Repositories\StockHistories;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Yajra\DataTables\Html\Column;

class StockHistoryController  extends Controller
{
    private StockHistories $repo;
    public function __construct(StockHistories $repo )
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
        $stock_id = $request->get('stock_id');
        if($stock_id){
            $stock = Stock::findOrFail($stock_id);
        }else{
            $stock = null; 
        }
        $this->authorize('viewAny', StockHistory::class);
        return Inertia::render('StockHistories/Index',[
            "can" => [
                "viewAny" => \Auth::user()->can('viewAny', StockHistory::class),
                "create" => \Auth::user()->can('create', StockHistory::class),
            ],
            "columns" => $this->repo::dtColumns(),
            'stock' => $stock
        ]);
    }

    /**
    * Show the form for creating a new resource.
    *
    * @return  \Inertia\Response
    */
    public function create()
    {
        $this->authorize('create', StockHistory::class);
        return Inertia::render("StockHistories/Create",[
            "can" => [
            "viewAny" => \Auth::user()->can('viewAny', StockHistory::class),
            "create" => \Auth::user()->can('create', StockHistory::class),
            ]
        ]);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param StoreStockHistory $request
    * @return \Illuminate\Http\RedirectResponse
    */
    public function store(StoreStockHistory $request)
    {
        try {
            $data = $request->sanitizedObject();
            $stockHistory = $this->repo::store($data);
            return back()->with(['success' => "The Stock History was created succesfully."]);
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
    * @param StockHistory $stockHistory
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function show(Request $request, StockHistory $stockHistory)
    {
        try {
            $this->authorize('view', $stockHistory);
            $model = $this->repo::init($stockHistory)->show($request);
            return Inertia::render("StockHistories/Show", ["model" => $model]);
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
    * @param StockHistory $stockHistory
    * @return \Inertia\Response|\Illuminate\Http\RedirectResponse
    */
    public function edit(Request $request, StockHistory $stockHistory)
    {
        try {
            $this->authorize('update', $stockHistory);
            //Fetch relationships
            
            $stockHistory->load([
                'detaine',
                'etab',
                'stock',
                'user',
            ]);
            return Inertia::render("StockHistories/Edit", ["model" => $stockHistory]);
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
    * @param UpdateStockHistory $request
    * @param {$modelBaseName} $stockHistory
    * @return \Illuminate\Http\RedirectResponse
    */
    public function update(UpdateStockHistory $request, StockHistory $stockHistory)
    {
        try {
            $data = $request->sanitizedObject();
            $res = $this->repo::init($stockHistory)->update($data);
            return back()->with(['success' => "The StockHistory was updated succesfully."]);
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
    * @param StockHistory $stockHistory
    * @return \Illuminate\Http\RedirectResponse
    */
    public function destroy(DestroyStockHistory $request, StockHistory $stockHistory)
    {
        $res = $this->repo::init($stockHistory)->destroy();
        if ($res) {
            return back()->with(['success' => "The StockHistory was deleted succesfully."]);
        }
        else {
            return back()->with(['error' => "The StockHistory could not be deleted."]);
        }
    }
}
