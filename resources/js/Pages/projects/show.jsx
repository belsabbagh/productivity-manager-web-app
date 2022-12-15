import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import {KeyboardOptionKey, Person} from "@mui/icons-material";
import TextDisplay from "@/Components/TextDisplay";
import ListDisplay from "@/Components/ListDisplay";
import AttributeDisplay from "@/Components/AttributeDisplay";
import EmployeeUtilization from "@/Components/EmployeeUtilization";
import ItemHeader from "@/Components/ItemHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function show(props) {
    let {project} = props
    project = project.data
    console.log(project)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Project Details"}
        >            <Head>
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
                        value={project.leader.name}
                        className=" mb-5"
                    />
                    <ListDisplay
                        label={"Team"}
                        data={project.team}
                        itemValueKey={'email'}
                        className="w-full mb-5 rounded-lg"
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
