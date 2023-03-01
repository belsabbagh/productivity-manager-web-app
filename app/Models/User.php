<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Mehradsadeghi\FilterQueryString\FilterQueryString;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, FilterQueryString;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'user_type_id',
    ];

    protected $appends = ['total_utilization'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $filters = ['sort'];

    public function user_type(): BelongsTo
    {
        return $this->belongsTo(UserType::class);
    }

    public function projects()
    {
        return $this->hasMany(Project::class, 'leader_id', 'id');
    }

    public function isAdmin(): bool
    {
        return $this->user_type->id == 3;
    }

    public function isLeader(): bool
    {
        return $this->user_type->id == 2;
    }

    public function getTotalUtilizationAttribute(): float
    {
        $total = 0;
        foreach ($this->projects as $project) {
            $total += $project->leader_utilization;
        }
        return $total;
    }
}
