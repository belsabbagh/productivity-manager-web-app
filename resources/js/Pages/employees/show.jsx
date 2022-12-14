import React, {useState} from 'react';
import '../../../css/app.css';
import {Head} from "@inertiajs/inertia-react";
import AttributeDisplay from "@/Components/AttributeDisplay";
import TextDisplay from "@/Components/TextDisplay";
import ListDisplay from "@/Components/ListDisplay";
import EmployeeUtilization from "@/Components/EmployeeUtilization";
import ApplicationLogo from "@/Components/Icons/ApplicationLogo";
import {KeyboardOptionKey, Person} from "@mui/icons-material";
import ItemHeader from "@/Components/ItemHeader";
import ProjectDisplay from "@/Components/PracticeNavBar/ProjectDisplay";

export default function show(props) {
    let {employee} = props
    employee=employee.data
    console.log(employee)
    return (
        <>
            <Head>
                <title>employees show</title>
            </Head>
            <div className="bg-white p-6 flex flex-col">
                <ItemHeader
                    title={employee.first_name+" Details"}
                />
                <div className="flex-col justify-center bg-content rounded-lg px-8 py-4">
                    <div className="flex flex-row justify-center mb-5">
                        <Person className="w-64 h-64"/>
                    </div>
                    <TextDisplay
                        label={"Name"}
                        value={employee.first_name + " " + employee.last_name}
                        className="mb-5"
                    />
                    <TextDisplay
                        label={"Email"}
                        value={employee.email}
                        className=" mb-5"
                    />
                    <ListDisplay
                        label={"Skills"}
                        data={employee.skills}
                        itemValueKey={'name'}
                        className=" w-full mb-5"
                    />
                    <ProjectDisplay
                        label={"Project"}
                        resource={"projects"}
                        data={employee.projects}
                        itemValueKey={'name'}
                        className="w-full"
                    />
                    <AttributeDisplay
                        label={"Utilization"}
                        className="mb-5"
                    >
                        <EmployeeUtilization
                            value={employee.total_utilization}
                            projectCount={employee.projects.length}
                        />
                    </AttributeDisplay>
                </div>
            </div>
        </>
    );
}
