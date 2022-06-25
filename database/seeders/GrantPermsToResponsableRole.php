<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class GrantPermsToResponsableRole extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::query()->where("name","=", "responsable")->first();
        if ($admin) {
            $admin->givePermissionTo(Permission::where('id' ,'>' , 18)->whereNotIn('id' , 
            [
                22,24,25,
                28,30,31,
                34,36,37,
                40,42,43,
                52,54,55,
                66,67,
            ]
            )->get());
        }
    }
}
