<?php
namespace Services\Auth;

use App\Models\User;

function evaluateUserType(User $user, $user_type_id): bool
{
    return $user->user_type->id === $user_type_id;
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
