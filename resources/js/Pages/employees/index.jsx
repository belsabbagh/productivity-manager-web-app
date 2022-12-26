import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import EmployeesTable from "@/Components/Tables/EmployeesTable";
import {isAdmin} from "@/lib";
import PersonnelNav from "@/Components/PersonnelNav";
import IndexContent from "@/Components/IndexContent";
import EmployeeIndexFilter from "@/Components/IndexFilters/EmployeeIndexFilter";

export default function index(props) {
    const employees = props.employees.data
    const skills = props.skills
    const userType = props.auth.user.user_type_id
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Employees"}
            backHref={'/dashboard'}
        >
            <PersonnelNav active={'employees'}/>
            <IndexContent
                indexQuery={<EmployeeIndexFilter skills={skills}/>}
                resource={'employee'}
                canCreate={isAdmin(userType)}
            >
                <EmployeesTable
                    data={employees}
                    firstColKey={'email'}
                />
            </IndexContent>
        </AuthenticatedLayout>
    );
}
