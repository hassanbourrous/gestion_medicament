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
        Schema::create('stock_history', function (Blueprint $table) {
            $table->id();

            $table->string('type',255)->default('transfere');
            
            $table->string('comment',255)->nullable();
                        
            $table->integer('quantite')->nullable()->default(0);
            
            $table->unsignedBigInteger('stock_id')->nullable();
            $table->foreign('stock_id')->references('id')->on('stocks')->onDelete('set null');
            
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
            
            $table->unsignedBigInteger('etab_id')->nullable();
            $table->foreign('etab_id')->references('id')->on('establishments')->onDelete('set null');

            $table->unsignedBigInteger('region_id')->nullable();
            $table->foreign('region_id')->references('id')->on('regions')->onDelete('set null');

            $table->unsignedBigInteger('detaine_id')->nullable();
            $table->foreign('detaine_id')->references('id')->on('detainees')->onDelete('set null');

            $table->string('ordonnance' , 255 )->nullable();

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
        Schema::dropIfExists('stock_history');
    }
};
