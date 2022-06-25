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
        Schema::create('stock_status', function (Blueprint $table) {
            $table->id();
            $table->string('name' , 255)->unique();
            $table->string('color' , 50)->nullable();
            $table->integer('period')->nullable()->blank();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stock_status');
    }
};
