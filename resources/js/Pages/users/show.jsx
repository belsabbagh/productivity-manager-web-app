import React from 'react';
import {Head} from '@inertiajs/inertia-react';
import TextDisplay from "@/Components/TextDisplay";
import ItemHeader from "@/Components/ItemHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProjectDisplay from "@/Components/PracticeNavBar/ProjectDisplay";

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
        > <Head>
            <title>user show</title>
        </Head>
            <div className="bg-white p-6 flex flex-col">
                <ItemHeader
                    title={user.name + " Details"}
                    href={`/user/${user.id}/edit`}
                    isAllowedToEdit={userId === user.id}
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
