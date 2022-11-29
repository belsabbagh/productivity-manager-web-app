<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    private static string $user_type_name = 'name';
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
        $types = array('guest', 'leader', 'admin');
        $count = 1;
        foreach ($types as $i)
        {
            DB::table('user_types')->insert(
                array(self::$user_type_name => $i, 'access_level' => $count)
            );
            $count++;
        }
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
