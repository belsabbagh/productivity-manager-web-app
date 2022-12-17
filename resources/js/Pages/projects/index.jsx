import React from 'react';
import {Link, Head} from '@inertiajs/inertia-react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProjectsTable from "@/Components/ProjectsTable";
import {isAdmin} from "@/lib";
import ProjectIndexContent from "@/Components/ProjectIndexContent";

export default function index(props) {
    const projects = props.projects.data
    const regions = projects.map(i => {
        return {
            name: i.region
        }
    })
    const userType = props.auth.user.user_type_id
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Projects"}
            backHref={'/dashboard'}
        >
            <ProjectIndexContent resource={'project'} canCreate={isAdmin(userType)} regions={regions}>
                <ProjectsTable
                    data={projects}
                    firstColKey={'name'}
                />
            </ProjectIndexContent>
        </AuthenticatedLayout>
    );
}
