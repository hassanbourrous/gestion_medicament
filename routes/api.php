<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


/* Auto-generated users api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::post('/users/{user}/assign-role', [\App\Http\Controllers\API\UserController::class,'assignRole'])->name('users.assign-role');
    Route::post('/users/{user}/assign-establishment', [\App\Http\Controllers\API\UserController::class,'assignEstablishment'])->name('users.assign-establishment');
    Route::get('/users/dt', [\App\Http\Controllers\API\UserController::class,'dt'])->name('users.dt');
    Route::apiResource('/users', \App\Http\Controllers\API\UserController::class)->parameters(["users" => "user"]);
    Route::post('users-photo/{id}' ,[\App\Http\Controllers\API\UserController::class , 'photoUpdate'])->name('users-photo.update');
});


/* Auto-generated permissions api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::get('/permissions/dt', [\App\Http\Controllers\API\PermissionController::class,'dt'])->name('permissions.dt');
    Route::apiResource('/permissions', \App\Http\Controllers\API\PermissionController::class)->parameters(["permissions" => "permission"]);
});


/* Auto-generated roles api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::post('/roles/{role}/assign-permission', [\App\Http\Controllers\API\RoleController::class,'assignPermission'])->name('roles.assign-permission');
    Route::get('/roles/dt', [\App\Http\Controllers\API\RoleController::class,'dt'])->name('roles.dt');
    Route::apiResource('/roles', \App\Http\Controllers\API\RoleController::class)->parameters(["roles" => "role"]);
});


/* Auto-generated categories api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::get('/categories/dt', [\App\Http\Controllers\API\CategoryController::class,'dt'])->name('categories.dt');
    Route::apiResource('/categories', \App\Http\Controllers\API\CategoryController::class)->parameters(["categories" => "category"]);
});


/* Auto-generated stock-statuses api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::get('/stock-statuses/dt', [\App\Http\Controllers\API\StockStatusController::class,'dt'])->name('stock-statuses.dt');
    Route::apiResource('/stock-statuses', \App\Http\Controllers\API\StockStatusController::class)->parameters(["stock-statuses" => "stockStatus"]);
});


/* Auto-generated regions api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::get('/regions/dt', [\App\Http\Controllers\API\RegionController::class,'dt'])->name('regions.dt');
    Route::apiResource('/regions', \App\Http\Controllers\API\RegionController::class)->parameters(["regions" => "region"]);
});


/* Auto-generated detainees api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::get('/detainees/dt', [\App\Http\Controllers\API\DetaineeController::class,'dt'])->name('detainees.dt');
    Route::apiResource('/detainees', \App\Http\Controllers\API\DetaineeController::class)->parameters(["detainees" => "detainee"]);
    Route::post('detainees-photo/{id}' ,[\App\Http\Controllers\API\DetaineeController::class , 'photoUpdate'])->name('detainee-photo.update');
});


/* Auto-generated establishments api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::get('/establishments/dt', [\App\Http\Controllers\API\EstablishmentController::class,'dt'])->name('establishments.dt');
    Route::apiResource('/establishments', \App\Http\Controllers\API\EstablishmentController::class)->parameters(["establishments" => "establishment"]);
});


/* Auto-generated medicaments api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::get('/medicaments/dt', [\App\Http\Controllers\API\MedicamentController::class,'dt'])->name('medicaments.dt');
    Route::apiResource('/medicaments', \App\Http\Controllers\API\MedicamentController::class)->parameters(["medicaments" => "medicament"]);
});


/* Auto-generated stocks api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::get('/stocks/dt', [\App\Http\Controllers\API\StockController::class,'dt'])->name('stocks.dt');
    Route::apiResource('/stocks', \App\Http\Controllers\API\StockController::class)->parameters(["stocks" => "stock"]);
    Route::get('/stocks-print', [\App\Http\Controllers\API\StockController::class,'print'])->name('stocks.print');
    Route::get('/stocks-export', [\App\Http\Controllers\API\StockController::class,'export'])->name('stocks.export');

});


/* Auto-generated stock-histories api routes */
Route::group(["middleware"=>['auth:sanctum', 'verified'],'as' => 'api.'], function () {
    Route::get('/stock-histories/dt', [\App\Http\Controllers\API\StockHistoryController::class,'dt'])->name('stock-histories.dt');
    Route::apiResource('/stock-histories', \App\Http\Controllers\API\StockHistoryController::class)->parameters(["stock-histories" => "stockHistory"]);
    Route::get('/stocks-histories-print', [\App\Http\Controllers\API\StockHistoryController::class,'print'])->name('stock-histories.print');
    Route::get('/stocks-histories-export', [\App\Http\Controllers\API\StockHistoryController::class,'export'])->name('stock-histories.export');
});
