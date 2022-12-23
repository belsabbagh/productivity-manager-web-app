<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Employee;
use App\Models\Project;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(25)->create();
        Skill::factory(25)->create();
        Employee::factory(25)->create();
        Project::factory(25)->create();
        for($i=0; $i < 25; $i++)
        {
            DB::table('employee_skill')->insert([
                'employee_id' => rand(1, 25),
                'skill_id' => rand(1, 25)
            ]);

            DB::table('employee_project')->insert([
                'project_id' => rand(1, 25),
                'employee_id' => rand(1, 25),
                'utilization' => rand(2, 7) / 10
            ]);
        }
    }
}
