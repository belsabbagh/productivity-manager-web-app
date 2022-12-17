<?php
namespace Statistics;

use App\Models\Employee;
use App\Models\Skill;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

function getProjectRegionDistribution(): Collection
{
    return DB::table('projects')
        ->select('region', DB::raw('count(*) as total'))
        ->groupBy('region')
        ->get();
}

function getAverageUtilizationPerSkill(): array
{
    $skills = Skill::all();
    $arr = [];
    foreach ($skills as $i)
    {
        $total = 0;
        $employees = $i->employees;
        foreach ($employees as $emp)
            $total += $emp->total_utilization;
        $employeesCount = count($employees);
        if ($employeesCount <= 0) continue;
        $arr[] = [
            'skill' => $i->name,
            'averageUtilization' => $total / $employeesCount
        ];
    }
    return $arr;
}

function getEmployeeSkillDistribution(): Collection
{
    return Skill::all();
}

function getEmployeeUtilizationDistribution()
{
    $employees = Employee::all();
    $total = count($employees);
    return [
        [
            'category' => 'over utilized',
            'count' => count(array_filter($employees->toArray(), function ($var)
                {
                    return ($var['total_utilization'] > 1);
                })) / $total
        ],
        [
            'category' => 'mostly utilized',
            'count' => count(array_filter($employees->toArray(), function ($var)
                {
                    return ($var['total_utilization'] <= 0.5 && $var['total_utilization'] > 0);
                })) / $total
        ],
        [
            'category' => 'lightly utilized',
            'count' => count(array_filter($employees->toArray(), function ($var)
                {
                    return ($var['total_utilization'] < 0.5);
                })) / $total
        ]
    ];
}

function getCrossUtilizationDistribution()
{
    $employees = Employee::all();
    $cross = count(array_filter($employees->toArray(), function ($var)
    {
        return ($var['total_utilization'] > 1);
    }));
    $total = count($employees);
    return [
        [
            'category' => 'cross utilized',
            'count' => $cross
        ],
        [
            'category' => 'single assignment',
            'count' => $total - $cross
        ]
    ];
}

function getStatistics(): array
{
    return [
        'projectRegionDistribution' => getProjectRegionDistribution(),
        'employeeSkillDistribution' => getEmployeeSkillDistribution(),
        'averageUtilizationPerSkill' => getAverageUtilizationPerSkill(),
        'employeeUtilizationDistribution' => getEmployeeUtilizationDistribution(),
        'crossUtilizationDistribution' => getCrossUtilizationDistribution(),
    ];
}
