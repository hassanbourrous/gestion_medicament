<?php
namespace App\Policies;

use App\Models\StockStatus;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StockStatusPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('stock-statuses.index');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param    \App\Models\User  $user
     * @param    StockStatus  $stockStatus
     * @return  mixed
     */
    public function view(User $user, StockStatus $stockStatus)
    {
        return $user->hasPermissionTo('stock-statuses.show');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('stock-statuses.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param    \App\Models\User  $user
     * @param    StockStatus  $stockStatus
     * @return  mixed
     */
    public function update(User $user, StockStatus $stockStatus)
    {
        return $user->hasPermissionTo('stock-statuses.edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    StockStatus  $stockStatus
     * @return  mixed
     */
    public function delete(User $user, StockStatus $stockStatus)
    {
        return $user->hasPermissionTo('stock-statuses.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param    \App\Models\User  $user
     * @param    StockStatus  $stockStatus
     * @return  mixed
     */
    public function restore(User $user, StockStatus $stockStatus)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    StockStatus  $stockStatus
     * @return  mixed
     */
    public function forceDelete(User $user, StockStatus $stockStatus)
    {
        return $user->hasPermissionTo('stock-statuses.delete');
    }
}
