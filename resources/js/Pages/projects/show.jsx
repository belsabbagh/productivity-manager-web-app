import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import TextDisplay from "@/Components/TextDisplay";
import AttributeDisplay from "@/Components/AttributeDisplay";
import ItemHeader from "@/Components/ItemHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TeamTable from "@/Components/TeamTable";

export default function show(props) {
    let {project} = props
    project = project.data
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
                href={`/projects/${project.id}/edit`}
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
                    <AttributeDisplay
                        label={"Team"}
                    />
                    <TeamTable data={project.team} firstColKey={'email'}/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
