<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = ['name'];
    protected $appends = ['employee_count'];


    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'employee_skill', 'skill_id', 'employee_id');
    }

    public function getEmployeeCountAttribute()
    {
        return $this->employees()->count();
    }
}
