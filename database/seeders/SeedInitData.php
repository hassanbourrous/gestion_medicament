<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class SeedInitData extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    
    public function run()
    {
        $user = DB::table('users')->where("email", "=", "admin@msm-app.com")->first();

        //set categories initail data 
        if (Schema::hasTable('categories')) {
            DB::transaction(function () use ($user) {
                $categories = DB::table('categories')->count('*');
                if ($categories == 0) {
                    $obj1 = DB::table('categories')->insertGetId([ "name" => "Normaux"]);
                    $obj2 = DB::table('categories')->insertGetId([ "name" => "Chroniques"]);
                    $obj3 = DB::table('categories')->insertGetId([ "name" => "Psychotropes"]);
                }
            });
        } else {
            abort(500, "The categories table does not exist. Ensure you run the permissions migration before running this seeder.");
        }

        //set stock_status initail data 
        if (Schema::hasTable('stock_status')) {
            DB::transaction(function () use ($user) {
                $stock_status = DB::table('stock_status')->count('*');
                if ($stock_status == 0) {
                    $obj1 = DB::table('stock_status')->insertGetId([ "name" => "Périmé" , "color" => "#d81b43" , "period" => 0]);
                    $obj2 = DB::table('stock_status')->insertGetId([ "name" => "Proche périmé" , "color" => "#e64a19" , "period" => 6]);
                    $obj3 = DB::table('stock_status')->insertGetId([ "name" => "Normal" , "color" => "#05a045" , "period" => 7]);
                }
            });
        } else {
            abort(500, "The stock_status table does not exist. Ensure you run the permissions migration before running this seeder.");
        }

        
        //set regions initail data 
        if (Schema::hasTable('regions')) {
            DB::transaction(function () use ($user) {
                $regions = DB::table('regions')->count('*');
                if ($regions == 0) {
                    $obj1 = DB::table('regions')->insertGetId([ "name" => "DR_SousMassa" ]);
                    $obj2 = DB::table('regions')->insertGetId([ "name" => "DR_Marakech" ]);
                    $obj3 = DB::table('regions')->insertGetId([ "name" => "DR_DraaTafilalte" ]);
                    $obj4 = DB::table('regions')->insertGetId([ "name" => "DR_Tanger" ]);
                    $obj5 = DB::table('regions')->insertGetId([ "name" => "DR_Rabat" ]);
                    $obj6 = DB::table('regions')->insertGetId([ "name" => "DR_Casablanca" ]);
                    $obj7 = DB::table('regions')->insertGetId([ "name" => "DR_Laayoune" ]);
                }
            });
        } else {
            abort(500, "The stock_status table does not exist. Ensure you run the permissions migration before running this seeder.");
        }

        //set establishments initail data 
        if (Schema::hasTable('establishments')) {
            DB::transaction(function () use ($user) {
                $establishments = DB::table('establishments')->count('*');
                if ($establishments == 0) {
                    $obj1 = DB::table('establishments')->insertGetId([ "name" => "PL AIT MELLOUL 1" , 'region_id' => 1 ]);
                    $obj2 = DB::table('establishments')->insertGetId([ "name" => "PL AIT MELLOUL 2" , 'region_id' => 1 ]);
                    $obj3 = DB::table('establishments')->insertGetId([ "name" => "PL TIZNITE" , 'region_id' => 1 ]);
                    $obj4 = DB::table('establishments')->insertGetId([ "name" => "PL TANTAN" , 'region_id' => 1 ]);
                    $obj5 = DB::table('establishments')->insertGetId([ "name" => "PL BOUIZAKAREN" , 'region_id' => 1 ]);
                    $obj6 = DB::table('establishments')->insertGetId([ "name" => "PL TATA" , 'region_id' => 1 ]);
                    $obj7 = DB::table('establishments')->insertGetId([ "name" => "PL TAROUDANT" , 'region_id' => 1 ]);
                    $obj8 = DB::table('establishments')->insertGetId([ "name" => "PL l'Oudaya" , 'region_id' => 2 ]);
                    $obj9 = DB::table('establishments')->insertGetId([ "name" => "PL Essaouira" , 'region_id' => 2 ]);
                    $obj10 = DB::table('establishments')->insertGetId([ "name" => "PL Mol bargi" , 'region_id' => 2 ]);
                    $obj11 = DB::table('establishments')->insertGetId([ "name" => "PL bengrir" , 'region_id' => 2 ]);
                    $obj8 = DB::table('establishments')->insertGetId([ "name" => "PL meknes" , 'region_id' => 3 ]);
                    $obj9 = DB::table('establishments')->insertGetId([ "name" => "PL BOURKAYEZ" , 'region_id' => 3 ]);
                    $obj10 = DB::table('establishments')->insertGetId([ "name" => "PL IFRANE" , 'region_id' => 3 ]);
                    $obj11 = DB::table('establishments')->insertGetId([ "name" => "PL AZROU" , 'region_id' => 3 ]);
                }
            });
        } else {
            abort(500, "The stock_status table does not exist. Ensure you run the permissions migration before running this seeder.");
        }

        //set medicaments initail data 
        if (Schema::hasTable('medicaments')) {
            DB::transaction(function () use ($user) {
                $medicaments = DB::table('medicaments')->count('*');
                if ($medicaments == 0) {
                    $obj1 = DB::table('medicaments')->insertGetId([ "dosage" => "50 MG" ,"nom_commercial" => "AMIAN", "presentation" => "30 COMPRIMES", "ref" => "16" , 'category_id' => 3 ]);
                    $obj2 = DB::table('medicaments')->insertGetId([ "dosage" => "100 MG" ,"nom_commercial" => "AMIAN", "presentation" => "30 COMPRIMES", "ref" => "162" , 'category_id' => 3 ]);
                    $obj3 = DB::table('medicaments')->insertGetId([ "dosage" => "400 MG" ,"nom_commercial" => "AMIAN", "presentation" => "30 COMPRIMES", "ref" => "163" , 'category_id' => 3 ]);
                    $obj4 = DB::table('medicaments')->insertGetId([ "dosage" => "1 G" ,"nom_commercial" => "AMOXIL", "presentation" => "12 COMPRIMES", "ref" => "195" , 'category_id' => 1 ]);
                    $obj5 = DB::table('medicaments')->insertGetId([ "dosage" => "1000 G" ,"nom_commercial" => "AMOXIL", "presentation" => "24 COMPRIMES", "ref" => "165" , 'category_id' => 1 ]);
                    $obj6 = DB::table('medicaments')->insertGetId([ "dosage" => "1000 G" ,"nom_commercial" => "ASPEGIC", "presentation" => "20 SACHETS", "ref" => "16855" , 'category_id' => 1 ]);
                    $obj7 = DB::table('medicaments')->insertGetId([ "dosage" => "500 MG" ,"nom_commercial" => "ASPEGIC", "presentation" => "20 SACHETS", "ref" => "169" , 'category_id' => 1 ]);
                    $obj8 = DB::table('medicaments')->insertGetId([ "dosage" => "1000 MG" ,"nom_commercial" => "DOLIPRANE", "presentation" => "10 COMPRIMES", "ref" => "16009" , 'category_id' => 1 ]);
                    $obj9 = DB::table('medicaments')->insertGetId([ "dosage" => "500 MG" ,"nom_commercial" => "DOLIPRANE", "presentation" => "20 COMPRIMES", "ref" => "1659" , 'category_id' => 1 ]);

                }
            });
        } else {
            abort(500, "The stock_status table does not exist. Ensure you run the permissions migration before running this seeder.");
        }
//set detenu initail data 
if (Schema::hasTable('detainees')) {
    DB::transaction(function () use ($user) {
        $detainees = DB::table('detainees')->count('*');
        if ($detainees == 0) {
            $obj1 = DB::table('detainees')->insertGetId([ "first_name" => "mohamed" ,"last_name" => "molode", "code" => "1001", "cin" => "ml54785" , 'esta_id' => 1 ]);
            $obj1 = DB::table('detainees')->insertGetId([ "first_name" => "yassine" ,"last_name" => "borkoz", "code" => "1002", "cin" => "jh8456" , 'esta_id' => 1 ]);
            $obj1 = DB::table('detainees')->insertGetId([ "first_name" => "imade" ,"last_name" => "yosri", "code" => "2002", "cin" => "m5846" , 'esta_id' => 1 ]);
            $obj1 = DB::table('detainees')->insertGetId([ "first_name" => "morade" ,"last_name" => "yousefy", "code" => "3510", "cin" => "jb59746" , 'esta_id' => 1 ]);
            $obj1 = DB::table('detainees')->insertGetId([ "first_name" => "ahmed" ,"last_name" => "amhare", "code" => "3520", "cin" => "jh64780" , 'esta_id' => 2 ]);
            $obj1 = DB::table('detainees')->insertGetId([ "first_name" => "ismail" ,"last_name" => "asri", "code" => "3521", "cin" => "jm56965" , 'esta_id' => 2 ]);
            $obj1 = DB::table('detainees')->insertGetId([ "first_name" => "fadwa" ,"last_name" => "grouji", "code" => "3522", "cin" => "j56406" , 'esta_id' => 2 ]);
            $obj1 = DB::table('detainees')->insertGetId([ "first_name" => "ibrahime" ,"last_name" => "omari", "code" => "3523", "cin" => "A42001" , 'esta_id' => 2 ]);
             
        }
    });
} else {
    abort(500, "The stock_status table does not exist. Ensure you run the permissions migration before running this seeder.");
}
        //TODO add initial data seeders for remaining tables


    }
}
