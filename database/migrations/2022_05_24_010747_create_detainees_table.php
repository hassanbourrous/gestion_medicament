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
        Schema::create('detainees', function (Blueprint $table) {
            $table->id();
            $table->string('first_name',255);
            $table->string('last_name',255);
            $table->string('code' ,50)->nullable();
            $table->string('cin' ,50)->nullable();
            $table->date("birthday")->nullable();
            $table->string('profile_photo_path', 2048)->nullable();
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
        Schema::dropIfExists('detainees');
    }
};
