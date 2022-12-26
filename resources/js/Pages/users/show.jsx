import React from 'react';
import {Head} from '@inertiajs/inertia-react';
import TextDisplay from "@/Components/Outputs/TextDisplay";
import AttributeDisplay from "@/Components/Outputs/AttributeDisplay";
import ItemHeader from "@/Components/ItemHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TeamTable from "@/Components/Tables/TeamTable";
import ProjectDisplay from "@/Components/Outputs/ProjectDisplay";
import {Edit} from "@mui/icons-material";

export default function show(props) {
    let {user} = props
    user = user.data
    const userId = props.auth.user.id
    console.log(userId)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"User Details"}
            backHref={'/users'}
        >
            <div className="bg-white p-6 flex flex-col">
                <ItemHeader
                    title={user.name + " Details"}
                    href={userId === user.id ? `/users/${user.id}/edit` : null}
                    linkIcon={<Edit className={'w-6 h-6'}/>}
                />
                <div className="flex-col justify-center bg-content rounded-lg px-8 py-4">
                    <TextDisplay
                        label={"Name"}
                        value={user.name}
                        className="mb-5"
                    />
                    <TextDisplay
                        label={"Email"}
                        value={user.email}
                        className=" mb-5"
                    />
                    <TextDisplay
                        label={"User type"}
                        value={user.user_type.name}
                        className=" mb-5"
                    />
                    {user.projects.length > 0 ?
                        <ProjectDisplay
                            label={"Projects"}
                            resource={"projects"}
                            data={user.projects}
                            itemValueKey={'name'}
                            className="w-full"
                        />
                        :
                        <TextDisplay
                            label={"Projects"}
                            value={"None"}
                            className=" mb-5"
                        />
                    }
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
