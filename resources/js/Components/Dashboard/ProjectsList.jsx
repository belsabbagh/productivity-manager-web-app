import ResourceList from "@/Components/Dashboard/ResourceList";
import ProjectRow from "@/Components/Dashboard/ProjectRow";
import React from "react";

export default function ProjectsList({projects, className}) {
    return (
        <ResourceList className={className} resource={"projects"}>
            {
                projects.map((i) => {
                    return (<ProjectRow data={i} key={i.id}/>)
                })
            }
        </ResourceList>
    )
}
