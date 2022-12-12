<?php

use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request)
{
    return $request->user();
});


Route::get('/projects/{limit}', function ($limit = 5)
{
    return response()->json(Project::all()->take($limit));
});

Route::get('/employees/{limit}', function ($limit = 5)
{
    return response()->json(
        EmployeeResource::collection(
            Employee::all()->sortBy('total_utilization', SORT_NATURAL, true)->take($limit)
        )
    );
});

Route::get('/project-region-distribution', function ()
{
    return response()->json(DB::table('projects')
        ->select('region', DB::raw('count(*) as total'))
        ->groupBy('region')
        ->get());
});
