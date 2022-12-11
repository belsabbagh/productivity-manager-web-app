import ResourceList from "@/Components/Dashboard/ResourceList";
import EmployeeRow from "@/Components/Dashboard/EmployeeRow";
import React from "react";

export default function EmployeesList({employees, className}) {
    return (
        <ResourceList className={className} resource={"employees"}>
            {
                employees.map((i) => {
                    return (<EmployeeRow data={i} key={i.id}/>)
                })
            }
        </ResourceList>
    )
}
