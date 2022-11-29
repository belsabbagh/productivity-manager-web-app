<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UserType extends Model
{
    protected $fillable = [
        'name',
        'access_level'
    ];

    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'user_type_id');
    }
}

