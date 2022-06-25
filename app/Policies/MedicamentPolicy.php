<?php
namespace App\Policies;

use App\Models\Medicament;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MedicamentPolicy
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
        return $user->hasPermissionTo('medicaments.index');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param    \App\Models\User  $user
     * @param    Medicament  $medicament
     * @return  mixed
     */
    public function view(User $user, Medicament $medicament)
    {
        return $user->hasPermissionTo('medicaments.show');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param    \App\Models\User  $user
     * @return  mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('medicaments.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param    \App\Models\User  $user
     * @param    Medicament  $medicament
     * @return  mixed
     */
    public function update(User $user, Medicament $medicament)
    {
        return $user->hasPermissionTo('medicaments.edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    Medicament  $medicament
     * @return  mixed
     */
    public function delete(User $user, Medicament $medicament)
    {
        return $user->hasPermissionTo('medicaments.delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param    \App\Models\User  $user
     * @param    Medicament  $medicament
     * @return  mixed
     */
    public function restore(User $user, Medicament $medicament)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param    \App\Models\User  $user
     * @param    Medicament  $medicament
     * @return  mixed
     */
    public function forceDelete(User $user, Medicament $medicament)
    {
        return $user->hasPermissionTo('medicaments.delete');
    }
}
