import DashboardList from "@/Components/Dashboard/DashboardList";
import DashboardProjectsRow from "@/Components/Dashboard/DashboardProjectsRow";
import React from "react";

export default function ProjectsList({projects, className}) {
    return (
        <DashboardList className={className} resource={"projects"}>
            {
                projects.map((i) => {
                    return (<DashboardProjectsRow data={i} key={i.id}/>)
                })
            }
        </DashboardList>
    )
}
