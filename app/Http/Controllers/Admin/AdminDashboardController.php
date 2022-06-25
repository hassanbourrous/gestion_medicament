<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Detainee;
use App\Models\Medicament;
use App\Models\Stock;
use App\Models\StockHistory;
use App\Repositories\Stocks;
use App\Repositories\StockHistories;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    private Stocks $stock_repo;
    private StockHistories $history_repo;
    public function __construct(Stocks $stock_repo , StockHistories $history_repo)
    {
        $this->stock_repo = $stock_repo;
        $this->history_repo = $history_repo;
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
        $query = Stock::query()->select(Stock::getModel()->getTable().'.*' );
        
        if(!\Auth::user()->hasRole("administrator")){
            $etabs_ids = \Auth::user()->establishments->pluck('id')->toArray();
            $stocks_quantity = Stock::whereIn('esta_id' ,$etabs_ids)->sum('quantite');
            $stocks_history = StockHistory::join('stocks', "stock_history.stock_id" , "=" , "stocks.id" )->whereIn('stocks.esta_id' ,$etabs_ids)->count();
            $last_s_h = StockHistory::join('stocks', "stock_history.stock_id" , "=" , "stocks.id" )->whereIn('stocks.esta_id' ,$etabs_ids)->orderBy('stock_history.id', 'desc');
            $detenus = Detainee::whereIn('esta_id' ,$etabs_ids)->count();
            $query->whereIn('esta_id' , $etabs_ids );

        }else{
            $stocks_quantity = Stock::sum('quantite');
            $stocks_history = StockHistory::count();
            $detenus = Detainee::count();
            $last_s_h = StockHistory::orderBy('id', 'desc');
        }
        
        $medicaments = Medicament::count();
        
        $query = $query->orderBy('id', 'desc')->take(15);
        $results = $this->stock_repo::dt($query);
        $stocks = null;
        try{
            $stocks = $results->original['data'];
        }catch(\Throwable $exception){
            \Log::error($exception);
        }
        $last_s_h = $last_s_h->take(15)->with([
            'detaine',
            'etab',
            'stock',
            'user',
            'region'
        ])->get();
        return Inertia::render('AdminDashboard' , [
            "data" => [
                "stocks_quantity" => $stocks_quantity,
                "stocks_history" => $stocks_history,
                "detenus" => $detenus , 
                "medicaments" => $medicaments,
                "last_s_h" =>  $last_s_h,
                "stocks" => $stocks,
            ],
        ]);
    }
}
