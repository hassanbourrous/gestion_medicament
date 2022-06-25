<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if(\Auth::user()){
        return Redirect::route('admin.dashboard');
    }else{
        return Inertia::render('Welcome');
    }
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    if(\Auth::user()){
        return Redirect::route('admin.dashboard');
    }else{
        return Inertia::render('Welcome');
    }
})->name('dashboard');


Route::get('/stocks/print', [\App\Http\Controllers\API\StockController::class,'print'])->name('stocks.print');
Route::get('/stocks/export', [\App\Http\Controllers\API\StockController::class,'export'])->name('stocks.export');