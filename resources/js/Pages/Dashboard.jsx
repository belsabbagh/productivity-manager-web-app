import {Head} from '@inertiajs/inertia-react';
import '../../css/app.css'
import EmployeesList from "@/Components/Dashboard/EmployeesList";
import ProjectsList from "@/Components/Dashboard/ProjectsList";
import ChartsView from "@/Components/Dashboard/ChartsView";


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
