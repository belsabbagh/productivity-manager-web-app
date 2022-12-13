<?php

use App\Models\Project;
use App\Models\User;

function evaluateUserType(User $user, int $id): bool
{
    return $user->user_type->id == $id;
}

function isAdmin(User $user): bool
{
    return evaluateUserType($user, 3);
}

function isEmployee(User $user): bool
{
    return evaluateUserType($user, 2);
}

function isUser(User $user): bool
{
    return isAdmin($user) || isEmployee($user);
}

function isProjectLeader(User $user, Project $project): bool
{
    return $user->id == $project->leader_id;
}
