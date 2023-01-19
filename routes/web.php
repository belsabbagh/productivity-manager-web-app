<?php

include_once base_path() . '/services/statistics.php';

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\UserController;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use App\Models\Project;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use function Services\Statistics\getStatistics;

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
    return Redirect::route('login');
});

Route::get('/charts', function () {
    return Inertia::render('charts', ['charts' => getStatistics()]);
});

Route::resource('users', UserController::class)->middleware(['auth', 'verified']);
Route::resource('employees', EmployeeController::class)->middleware(['auth', 'verified']);
Route::resource('projects', ProjectController::class)->middleware(['auth', 'verified']);
Route::resource('projects.team', TeamController::class)->middleware(['auth', 'verified']);
Route::resource('skills', SkillController::class)->middleware(['auth', 'verified']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'employees' => EmployeeResource::collection(
            Employee::all()->sortBy('total_utilization', SORT_NATURAL, true)->take(4)
        ),
        'projects' => Project::all()->take(4),
        'charts' => getStatistics()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__ . '/auth.php';
