<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    private static string $user_type_name = 'user_type_name';
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_types', function (Blueprint $table) {
            $table->id();
            $table->string(self::$user_type_name);
            $table->integer('access_level');
            $table->timestamps();
        });
        DB::table('user_types')->insert(
            array(
                self::$user_type_name => 'guest',
                'access_level' => 1
            )
        );
        DB::table('user_types')->insert(
            array(
                self::$user_type_name => 'employee',
                'access_level' => 2
            )
        );
        DB::table('user_types')->insert(
            array(
                self::$user_type_name => 'lead',
                'access_level' => 3
            )
        );
        DB::table('user_types')->insert(
            array(
                self::$user_type_name => 'manager',
                'access_level' => 4
            )
        );
        DB::table('user_types')->insert(
            array(
                self::$user_type_name => 'admin',
                'access_level' => 5
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_types');
    }
};
