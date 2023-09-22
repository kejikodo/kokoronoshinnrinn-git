<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('emotions', function (Blueprint $table) {
            $table->id(); //IDカラム
            $table->integer('user_id')->unsigned(); // ユーザーIDカラム
            $table->string('event',30); //できごとカラム
            $table->string('emotions', 30); // かんじょうカラム
            $table->string('emotions_boby',500); //かんがえたことカラム
            $table->timestamps(); // 登録日時と更新日時カラム
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('emotions');
    }
};
