import React, {useState} from 'react';
import {Head} from '@inertiajs/inertia-react';
import DashboardList from "@/Components/DashboardList";
import DashboardEmployeesRow from "@/Components/DashboardEmployeesRow";
import '../../css/app.css'
import DashboardProjectsRow from "@/Components/DashboardProjectsRow";

function createEmployee(id, name, utilization) {
    return {id, name, utilization};
}

let employees = [
    createEmployee(1, 'Kaeya', 0.6),
    createEmployee(2, 'Diluc', 1),
    createEmployee(3, 'Jean', 1.4),
    createEmployee(4, 'Sayu', 0.2),
];

function createProject(id, name){
    return {id, name}
}

let projects = [
    createProject('')
]

function getProjects() {
    const res = Promise.all()
    return JSON.parse(res);
}

export default function Dashboard(props) {
    const [projects, setProjects] = useState([])
    fetch('api/projects').then((res) => {
        res.json().then((res)=> {
            console.log(res)
            setProjects(res)
        })
    })
    employees = employees.sort((a, b) => (a.utilization < b.utilization) ? 1 : -1)
    return (
        <>
            <Head><title>Dashboard</title></Head>
            <div className="min-h-12 pt-12 flex sm:justify-center items-center">
                <DashboardList className={"bg-content p-6 rounded-lg"} resource={"employees"}>
                    {employees.map((i)=> {
                        return (<DashboardEmployeesRow data={i} key={i.id}/>)
                    })}
                </DashboardList>
                <DashboardList className={"bg-content p-6 rounded-lg"} resource={"projects"}>
                    {projects.map((i)=> {
                        return (<DashboardProjectsRow data={i} key={i.id}/>)
                    })}
                </DashboardList>
            </div>
        </>

    );
}
