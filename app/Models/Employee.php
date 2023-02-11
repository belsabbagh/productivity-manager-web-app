<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'skills',
        'projects'
    ];

    protected $appends = ['total_utilization', 'projects_count'];

    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'employee_skill', 'employee_id', 'skill_id');
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class, 'employee_project', 'employee_id', 'project_id')->withPivot('utilization');
    }

    public function getTotalUtilizationAttribute()
    {
        $total = 0;
        foreach ($this->projects as $project)
            $total += $project->pivot->utilization;
        return $total;
    }

    public function getProjectsCountAttribute()
    {
        return count($this->projects);
    }
}
