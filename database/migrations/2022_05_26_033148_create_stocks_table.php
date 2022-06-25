<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stocks', function (Blueprint $table) {
            $table->id();
            $table->date('date_dexpiration');
            $table->date('date_production')->nullable();
            $table->integer('quantite')->nullable()->default(0);
            
            $table->unsignedBigInteger('medicament_id')->nullable();
            $table->foreign('medicament_id')->references('id')->on('medicaments')->onDelete('set null');
            
            $table->unsignedBigInteger('esta_id')->nullable();
            $table->foreign('esta_id')->references('id')->on('establishments')->onDelete('set null');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stocks');
    }
};
