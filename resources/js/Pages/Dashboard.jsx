import React, {useState} from 'react';
import {Head} from '@inertiajs/inertia-react';
import '../../css/app.css'
import Carousel from 'react-material-ui-carousel'
import EmployeesList from "@/Components/Dashboard/EmployeesList";
import ProjectsList from "@/Components/Dashboard/ProjectsList";

function createEmployee(id, name, utilization) {
    return {id, name, utilization};
}

function sortEmployeesByUtilization(data) {
    const utilizationKey = 'utilization'
    return data.sort((a, b) => (a[utilizationKey] < b[utilizationKey]) ? 1 : -1)
}

export default function Dashboard(props) {
    const [projects, setProjects] = useState([])
    const [employees, setEmployees] = useState( [
        createEmployee(3, 'Jean', 1.4),
        createEmployee(5, 'Kokomi', 1.2),
        createEmployee(2, 'Diluc', 1),
        createEmployee(7, 'Shinobu', 0.9),
        createEmployee(1, 'Kaeya', 0.6),
        createEmployee(4, 'Sayu', 0.2),
        createEmployee(6, 'Itto', 0.1),
    ])
    fetch('api/projects').then((res) => {
        res.json().then((res)=> {
            setProjects(res)
        })
    })
    return (
        <>
            <Head><title>Dashboard</title></Head>
            <div className="min-h-12 pt-12 flex flex-col sm:justify-center items-center">
                <EmployeesList className={"flex-col min-w-fit bg-content p-6 rounded-lg"} employees={employees}/>
                <ProjectsList className={"flex-col min-w-fit bg-content p-6 rounded-lg"} projects={projects}/>
                <Carousel>

                </Carousel>
            </div>
        </>

    );
}
