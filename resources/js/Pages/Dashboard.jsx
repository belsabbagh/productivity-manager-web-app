import React, {useState} from 'react';
import {Head} from '@inertiajs/inertia-react';
import '../../css/app.css'
import Carousel from 'react-material-ui-carousel'
import EmployeesList from "@/Components/Dashboard/EmployeesList";
import ProjectsList from "@/Components/Dashboard/ProjectsList";
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip} from 'chart.js'
import ChartsView from "@/Components/Dashboard/ChartsView";

Chart.register(ArcElement, Tooltip);

function getPieChart(data, label, labelKey, countKey) {
    return {
        labels: data.map(i => i[labelKey]),
        datasets: [
            {
                id: 1,
                label: label,
                data: data.map(i => i[countKey]),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            }
        ],
    };
}

function getChartsData(charts) {
    return {
        projectRegionDistribution: getPieChart(
            charts.projectRegionDistribution,
            'project count',
            'name',
            'total'
        ),
        employeeSkillDistribution: getPieChart(
            charts.employeeSkillDistribution,
            'employee count',
            'name',
            'employee_count'
        ),
    };
}

export default function Dashboard({employees, projects, charts}) {
    const contentStyle = "bg-content p-6 my-3 mx-3 rounded-lg"
    console.log({charts})
    return (
        <div className={"min-h-full"}>
            <Head><title>Dashboard</title></Head>
            <div className="min-h-full pt-12 flex sm:justify-center bg-background items-center">
                <ChartsView className={`${contentStyle}`} charts={getChartsData(charts)}/>
                <div className={"flex-col mx-3"}>
                    <EmployeesList
                        className={`w-full ${contentStyle}`}
                        employees={employees.data}
                    />
                    <ProjectsList
                        className={`w-full ${contentStyle}`}
                        projects={projects}
                    />
                </div>
            </div>
        </div>

    );
}
