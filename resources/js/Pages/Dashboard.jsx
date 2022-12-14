import {Head} from '@inertiajs/inertia-react';
import '../../css/app.css'
import EmployeesList from "@/Components/Dashboard/EmployeesList";
import ProjectsList from "@/Components/Dashboard/ProjectsList";
import ChartsCarousel from "@/Components/Dashboard/ChartsCarousel";
import Header from "@/Components/Header";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({employees, projects, charts, auth, errors}) {
    const contentStyle = "bg-content p-6 my-3 mx-3 rounded-lg"
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            title={'Dashboard'}
        >
            <Head><title>Dashboard</title></Head>
            <div className="min-h-full pt-12 flex sm:justify-center bg-background items-center">
                <ChartsCarousel className={`${contentStyle}`} charts={charts}/>
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
        </AuthenticatedLayout>
    );
}
