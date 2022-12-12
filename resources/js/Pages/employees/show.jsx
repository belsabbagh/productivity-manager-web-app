import React, {useState} from 'react';
import '../../../css/app.css';
import {Head} from "@inertiajs/inertia-react";
import AttributeDisplay from "@/Components/AttributeDisplay";
import TextDisplay from "@/Components/TextDisplay";
import ListDisplay from "@/Components/ListDisplay";
import EmployeeUtilization from "@/Components/EmployeeUtilization";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {KeyboardOptionKey, Person} from "@mui/icons-material";

const skills = [
    {
        id: 1, name: "C++"
    },
    {
        id: 2, name: "Java"
    },
    {
        id: 3, name: "PHP"
    },
    {
        id: 4, name: "PHP"
    },
    {
        id: 5, name: "PHP"
    },
    {
        id: 6, name: "PHP"
    },
    {
        id: 7, name: "PHP"
    },
    {
        id: 8, name: "PHP"
    },
    {
        id: 9, name: "PHP"
    },
    {
        id: 10, name: "PHP"
    }
];

export default function show(props) {
    const {employee} = props
    console.log(skills)
    return (
        <>
            <Head>
                <title>employees show</title>
            </Head>
            <div className="bg-white p-6 flex flex-col">
                <div className="flex flex-row justify-between items-center pb-6 pt-3">
                    <div>
                        <h1>{employee.first_name} Details</h1>
                    </div>
                    <div>
                        <KeyboardOptionKey className="w-24 h-24"/>
                    </div>
                </div>
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
                        data={skills}
                        itemValueKey={'name'}
                        className=" w-full mb-5"
                    />
                    <ListDisplay
                        label={"Project"}
                        data={skills}
                        itemValueKey={'name'}
                        className="w-full mb-5 rounded-lg"
                    />
                    <AttributeDisplay
                        label={"Utilization"}
                        className="mb-5"
                    >
                        <EmployeeUtilization
                            value={1.2}
                            projectCount={2}
                        />
                    </AttributeDisplay>
                </div>
            </div>
        </>
    );
}
