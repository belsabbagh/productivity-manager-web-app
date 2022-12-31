<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Team extends Pivot
{
    protected $fillable = [
        'employee_id',
        'project_id',
        'utilization',
    ];

    protected $primaryKey = 'id';

    protected $table = 'employee_project';

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
