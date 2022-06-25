<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(SeedAdminRoleAndUser::class);
        $this->call(GrantAllPermsToAdmin::class);
        $this->call(SeedManagerRoleAndUser::class);
        $this->call(GrantPermsToManagerRole::class);
        $this->call(SeedResponsableRoleAndUser::class);
        $this->call(GrantPermsToResponsableRole::class);
        $this->call(SeedInitData::class);
    }
}
