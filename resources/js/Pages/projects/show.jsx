import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import {KeyboardOptionKey, Person} from "@mui/icons-material";
import TextDisplay from "@/Components/TextDisplay";
import ListDisplay from "@/Components/ListDisplay";
import AttributeDisplay from "@/Components/AttributeDisplay";
import EmployeeUtilization from "@/Components/EmployeeUtilization";
import ItemHeader from "@/Components/ItemHeader";

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
    const {project} = props
    console.log(project)
    return (
        <>
            <Head>
                <title>projects show</title>
            </Head>
            <div className="bg-white p-6 flex flex-col">
                <ItemHeader
                title={project.name+" Details"}
                />
                <div className="flex-col justify-center bg-content rounded-lg px-8 py-4">
                    <TextDisplay
                        label={"Name"}
                        value={project.name}
                        className="mb-5"
                    />
                    <TextDisplay
                        label={"Region"}
                        value={project.region}
                        className=" mb-5"
                    />
                    <TextDisplay
                        label={"Leader"}
                        value={project.leader_id}
                        className=" mb-5"
                    />
                    <ListDisplay
                        label={"Team"}
                        data={skills}
                        itemValueKey={'name'}
                        className="w-full mb-5 rounded-lg"
                    />
                </div>
            </div>
        </>
    );
}
