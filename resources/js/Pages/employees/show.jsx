import React, {useState} from 'react';
import '../../../css/app.css';
import {Head} from "@inertiajs/inertia-react";
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import {List, ListItem, ListItemButton, ListItemText, TableBody, TableCell, TableRow} from "@mui/material";
import {FixedSizeList} from 'react-window';
import AttributeDisplay from "@/Components/AttributeDisplay";
import TextDisplay from "@/Components/TextDisplay";
import ListDisplay from "@/Components/ListDisplay";
import EmployeeUtilization from "@/Components/EmployeeUtilization";
import ApplicationLogo from "@/Components/ApplicationLogo";

const skills = [
    {
        id: 1, name: "hamada"
    },
    {
        id: 2, name: "hamada2"
    },
    {
        id: 3, name: "hamada3"
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
            <div className="min-h-screen bg-background">
                <div className="font-bold mb-5 justify-center ">
                    <h1>Employee details</h1>
                </div>
                <div className="flex-col bg-content rounded-lg">
                    <TextDisplay
                        label={"Name"}
                        value={employee.first_name + " " + employee.last_name}
                    />
                    <TextDisplay
                        label={"Email"}
                        value={employee.email}
                    />
                    <ListDisplay
                        label={"Skills"}
                        data={skills}
                        itemValueKey={'name'}
                    />
                    <ListDisplay
                        label={"Projects"}
                        data={skills}
                        itemValueKey={'name'}
                    />
                    <AttributeDisplay
                        label={"Utilization"}
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
