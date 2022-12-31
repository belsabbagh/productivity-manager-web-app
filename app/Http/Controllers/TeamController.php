<?php

namespace App\Http\Controllers;

use App\Http\Resources\TeamResource;
use App\Models\Employee;
use App\Models\Project;
use App\Models\Team;
use App\Http\Requests\StoreTeamRequest;
use App\Http\Requests\UpdateTeamRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class TeamController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Team::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(Project $project): Response
    {
        return Inertia::render('team/create', ['project' => $project, 'employees' => Employee::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreTeamRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreTeamRequest $request, Project $project)
    {
        $team = new Team([
            'employee_id' => $request->input('employee'),
            'project_id' => $project->id,
            'utilization' => $request->input('utilization'),
        ]);
        $team->save();
        return Redirect::route("projects.show", ['project' => $project]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Team $team
     * @return \Illuminate\Http\Response
     */
    public function show(Team $team)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Team $team
     * @return Response
     */
    public function edit(Project $project, Team $team)
    {
        return Inertia::render('team/edit', [
            'project' => $project,
            'team' => new TeamResource($team)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateTeamRequest $request
     * @param \App\Models\Team $team
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTeamRequest $request, Team $team)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Team $team
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Project $project, Team $team)
    {
        $team->delete();
        $project->employees()->sync($team);
        return Redirect::route("projects.show", ['project' => $project]);
    }
}
