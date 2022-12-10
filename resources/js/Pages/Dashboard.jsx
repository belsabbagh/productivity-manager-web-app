import React from 'react';
import {Head} from '@inertiajs/inertia-react';
import DashboardList from "@/Components/DashboardList";
import DashboardEmployeesRow from "@/Components/DashboardEmployeesRow";
import '../../css/app.css'

function createData(id, name, utilization) {
    return {id, name, utilization};
}

let employees = [
    createData(1, 'Kaeya', 0.6),
    createData(2, 'Diluc', 0.9),
    createData(3, 'Jean', 1.4),
    createData(4, 'Sayu', 0.2),
];

export default function Dashboard(props) {
    employees = employees.sort((a, b) => (a.utilization < b.utilization) ? 1 : -1)
    return (
        <>
            <Head><title>Dashboard</title></Head>
            <div className="min-h-12 pt-12 flex sm:justify-center items-center">
                <DashboardList title={"employees"}>
                    {employees.map((i)=> {
                        return (<DashboardEmployeesRow resource={"employees"} data={i} key={i.id}/>)
                    })}
                </DashboardList>
                <DashboardList title={"projects"}>
                    {employees.map((i)=> {
                        return (<DashboardEmployeesRow resource={"projects"} data={i} key={i.id}/>)
                    })}
                </DashboardList>
            </div>
        </>

    );
}
