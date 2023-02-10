export default function getCharts(charts) {
    return {
        projectRegionDistribution: {
            title: 'Project Region Distribution',
            data: charts.projectRegionDistribution,
            label: 'project count',
            labelKey: 'region',
            countKey: 'total',
        },
        employeeSkillDistribution: {
            title: 'Employee Skill Distribution',
            data: charts.employeeSkillDistribution,
            label: 'employee count',
            labelKey: 'name',
            countKey: 'employee_count',
        },
        averageUtilizationPerSkill: {
            title: 'Average Utilization Per Skill',
            data: charts.averageUtilizationPerSkill,
            label: 'average utilization',
            labelKey: 'skill',
            countKey: 'averageUtilization',
        },
        employeeUtilizationDistribution: {
            title: 'Utilization Distribution',
            data: charts.employeeUtilizationDistribution,
            label: 'category',
            labelKey: 'category',
            countKey: 'count',
        },
        crossUtilizationDistribution: {
            title: 'Cross Utilization Distribution',
            data: charts.crossUtilizationDistribution,
            label: 'category',
            labelKey: 'category',
            countKey: 'count',
        },
    };
}

export const getChartsAsArray = function getChartsAsArray(charts) {
    return Object.values(getCharts(charts));
};
