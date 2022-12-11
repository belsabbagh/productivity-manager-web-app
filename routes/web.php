<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserTypeController;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use App\Models\Project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

Route::get('/charts', function () {
    return Inertia::render('charts');
});

Route::resource('users', UserController::class);
Route::resource('employees', EmployeeController::class);
Route::resource('projects', ProjectController::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'employees' => Employee::all()->sortBy('total_utilization', SORT_NATURAL, true)->take(4),
        'projects' => Project::all()->take(4),
        'charts' => [
            'projectRegionDistribution' => DB::table('projects')->select('region', DB::raw('count(*) as total'))->groupBy('region')->get()
        ]
    ]);
});//    ->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/auth.php';
