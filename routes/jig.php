<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::group(["middleware"=>['auth:sanctum', 'verified']], function () {
    Route::get('/admin', [\App\Http\Controllers\Admin\AdminDashboardController::class,'index'])->name('admin.dashboard');
});


/* Auto-generated users admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('users', \App\Http\Controllers\Admin\UserController::class)->parameters(["users" => "user"]);
});


/* Auto-generated permissions admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('permissions', \App\Http\Controllers\Admin\PermissionController::class)->parameters(["permissions" => "permission"]);
});


/* Auto-generated roles admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('roles', \App\Http\Controllers\Admin\RoleController::class)->parameters(["roles" => "role"]);
});


/* Auto-generated categories admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('categories', \App\Http\Controllers\Admin\CategoryController::class)->parameters(["categories" => "category"]);
});


/* Auto-generated stock-statuses admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('stock-statuses', \App\Http\Controllers\Admin\StockStatusController::class)->parameters(["stock-statuses" => "stockStatus"]);
});


/* Auto-generated regions admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('regions', \App\Http\Controllers\Admin\RegionController::class)->parameters(["regions" => "region"]);
});


/* Auto-generated detainees admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {

    Route::resource('detainees', \App\Http\Controllers\Admin\DetaineeController::class)->parameters(["detainees" => "detainee"]);

});


/* Auto-generated establishments admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('establishments', \App\Http\Controllers\Admin\EstablishmentController::class)->parameters(["establishments" => "establishment"]);
});


/* Auto-generated medicaments admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('medicaments', \App\Http\Controllers\Admin\MedicamentController::class)->parameters(["medicaments" => "medicament"]);
});


/* Auto-generated stocks admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('stocks', \App\Http\Controllers\Admin\StockController::class)->parameters(["stocks" => "stock"]);
});


/* Auto-generated stock-histories admin routes */
Route::group(["prefix" => "admin","as" => "admin.","middleware"=>['auth:sanctum', 'verified']], function () {
    Route::resource('stock-histories', \App\Http\Controllers\Admin\StockHistoryController::class)->parameters(["stock-histories" => "stockHistory"]);
});
