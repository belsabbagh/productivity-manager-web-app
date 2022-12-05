<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class UserController extends Controller
{
    private string $resource_route = 'users';
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
    {
        $users = UserResource::collection(User::all());
        return Inertia::render("$this->resource_route/index", ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render("$this->resource_route/create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     *
     * @return \Inertia\Response
     */
    public function show(User $user)
    {
        return Inertia::render("$this->resource_route/show", ['user' => $user->toArray()]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     *
     * @return \Inertia\Response
     */
    public function edit(User $user)
    {
        return Inertia::render("$this->resource_route/edit", ['user' => $user->toArray()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param User  $user
     *
     * @return Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  User  $user
     *
     * @return Response
     */
    public function destroy(User $user)
    {
        //
    }
}
