<?php

include_once '../services/statistics.php';

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UserController;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use App\Models\Project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Services\Statistics\Statistics;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function ()
{
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function ()
{
    return Inertia::render('Dashboard');
});

Route::get('/charts', function ()
{
    $charts = new Statistics();
    return Inertia::render('charts', ['charts' => $charts->getStatistics()]);
})->middleware(['auth', 'verified']);

Route::resource('users', UserController::class)->middleware(['auth', 'verified']);
Route::resource('employees', EmployeeController::class)->middleware(['auth', 'verified']);
Route::resource('projects', ProjectController::class)->middleware(['auth', 'verified']);

Route::get('/dashboard', function ()
{
    $charts = new Statistics();
    return Inertia::render('Dashboard', [
        'employees' => EmployeeResource::collection(Employee::all()->sortBy('total_utilization', SORT_NATURAL, true)->take(4)),
        'projects' => Project::all()->take(4),
        'charts' =>  $charts->getStatistics()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__ . '/auth.php';
