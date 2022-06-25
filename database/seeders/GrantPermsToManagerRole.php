<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class GrantPermsToManagerRole extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::query()->where("name","=", "manager")->first();
        if ($admin) {
            $admin->givePermissionTo(Permission::where('id' ,'>' , 18)->whereNotIn('id' , [
                28,30,31,
                34,36,37,
                40,42,43,
                46,48,49,
                58,60,61,
                64,66,67,
                ])->get());
        }
    }
}
