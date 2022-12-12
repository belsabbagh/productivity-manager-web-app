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

function getChartsData(charts) {
    return {
        projectRegionDistribution: getPieChart(
            charts.projectRegionDistribution,
            'project count',
            'region',
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
    return (
        <div className={"min-h-full"}>
            <Head><title>Dashboard</title></Head>
            <div className="min-h-full pt-12 flex sm:justify-center bg-background items-center">
                <ChartsView className={`${contentStyle}`} charts={charts}/>
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
