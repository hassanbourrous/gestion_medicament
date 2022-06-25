<?php
namespace App\Policies;

use App\Models\Region;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RegionPolicy
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
        return $user->hasPermissionTo('regions.index');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param    \App\Models\User  $user
     * @param    Region  $region
     * @return  mixed
     */
    public function view(User $user, Region $region)
    {
        return $user->hasPermissionTo('regions.show');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('regions.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param    \App\Models\User  $user
     * @param    Region  $region
     * @return  mixed
     */
    public function update(User $user, Region $region)
    {
        return $user->hasPermissionTo('regions.edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    Region  $region
     * @return  mixed
     */
    public function delete(User $user, Region $region)
    {
        return $user->hasPermissionTo('regions.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param    \App\Models\User  $user
     * @param    Region  $region
     * @return  mixed
     */
    public function restore(User $user, Region $region)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    Region  $region
     * @return  mixed
     */
    public function forceDelete(User $user, Region $region)
    {
        return $user->hasPermissionTo('regions.delete');
    }
}
