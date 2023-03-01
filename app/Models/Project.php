<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'leader_id', 'leader_utilization', 'region'
    ];

    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'employee_project', 'project_id', 'employee_id',)->withPivot('id', 'utilization');
    }

    public function leader()
    {
        return $this->belongsTo(User::class);
    }
}
