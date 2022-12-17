<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Employee;
use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProjectController extends Controller
{
    private string $resource_route = 'projects';
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $projects = Project::all();
        return Inertia::render("$this->resource_route/index", [
            'projects' => ProjectResource::collection($projects),
            'skills' => Skill::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create(): \Inertia\Response
    {
        return Inertia::render("$this->resource_route/create", [
            'leaders' => User::where('user_type_id', 2)->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProjectRequest  $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreProjectRequest $request)
    {
        return Redirect::route("$this->resource_route.index");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     *
     * @return \Inertia\Response
     */
    public function show(Project $project)
    {
        return Inertia::render("$this->resource_route/show", ['project' => new ProjectResource($project)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     *
     * @return \Inertia\Response
     */
    public function edit(Project $project)
    {
        return Inertia::render("$this->resource_route/edit", [
            'project' => new ProjectResource($project),
            'leaders' => User::where('user_type_id', 2)->get()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProjectRequest  $request
     * @param  \App\Models\Project  $project
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        return Redirect::route("$this->resource_route.show", [$project]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Project $project)
    {
        return Redirect::route("$this->resource_route.index");
    }
}
