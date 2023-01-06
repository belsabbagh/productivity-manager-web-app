<?php

namespace App\Http\Controllers;

use App\Http\Resources\SkillResource;
use Illuminate\Support\Facades\Redirect;
use App\Models\Skill;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Requests\UpdateSkillRequest;
use Inertia\Inertia;
use Inertia\Response;

class SkillController extends Controller
{
    private string $resource_route = 'skills';

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
        $employees = SkillResource::collection(Skill::all());
        return Inertia::render("$this->resource_route/index", [
            'employees' => $employees,
            'skills' => Skill::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render("$this->resource_route/create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreSkillRequest $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreSkillRequest $request)
    {
        $skill = new Skill(['name' => $request->input('name')]);
        $skill->save();
        return Redirect::route("$this->resource_route.index");
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Skill $skill
     *
     * @return Response
     */
    public function show(Skill $skill): Response
    {
        return Inertia::render("$this->resource_route/show", ['skill' => new SkillResource($skill)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Skill $skill
     *
     * @return Response
     */
    public function edit(Skill $skill): Response
    {
        return Inertia::render("$this->resource_route/edit", [
            'skill' => new SkillResource($skill),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateSkillRequest $request
     * @param \App\Models\Skill $employee
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateSkillRequest $request, Skill $skill)
    {
        $skill->update([
            'name' => $request->input('name'),
        ]);
        return Redirect::route("$this->resource_route.show", [$skill]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Skill $employee
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Skill $skill)
    {
        $skill->delete();
        return Redirect::route("$this->resource_route.index");
    }
}
