export default function getCharts(charts){
    return [
        {
            title: 'Project Region Distribution',
            data: charts.projectRegionDistribution,
            label: 'project count',
            labelKey: 'region',
            countKey: 'total'
        },
        {
            title: 'Employee Skill Distribution',
            data: charts.employeeSkillDistribution,
            label: 'employee count',
            labelKey: 'name',
            countKey: 'employee_count'
        },
        {
            title: 'Average Utilization Per Skill',
            data: charts.averageUtilizationPerSkill,
            label: 'average utilization',
            labelKey: 'skill',
            countKey: 'averageUtilization'
        },
        {
            title: 'Utilization Distribution',
            data: charts.employeeUtilizationDistribution,
            label: 'category',
            labelKey: 'category',
            countKey: 'count'
        }
    ]
}
