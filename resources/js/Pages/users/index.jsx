import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UsersTable from "@/Components/Tables/UsersTable";
import {isAdmin} from "@/lib";
import PersonnelNav from "@/Components/PersonnelNav";
import IndexContent from "@/Components/IndexContent";
import UserIndexFilter from "@/Components/IndexContent/IndexFilters/UserIndexFilter";

export default function index(props) {
    const users = props.users.data
    const userType = props.auth.user.user_type_id
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Users"}
            backHref={'/dashboard'}
        >
            <PersonnelNav active={'users'}/>
            <IndexContent
                resource={'user'}
                canCreate={isAdmin(userType)}
                indexQuery={<UserIndexFilter/>}
            >
                <UsersTable
                    data={users}
                    firstColKey={'name'}
                />
            </IndexContent>
        </AuthenticatedLayout>
    );
}
