import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import EmployeesTable from "@/Components/EmployeesTable";
import {isAdmin} from "@/lib";
import EmployeeIndexContent from "@/Components/EmployeeIndexContent";
import PersonnelNav from "@/Components/PersonnelNav";

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
            <EmployeeIndexContent resource={'employee'} canCreate={isAdmin(userType)} skills={skills}>
                <EmployeesTable
                    data={employees}
                    firstColKey={'email'}
                />
            </EmployeeIndexContent>
        </AuthenticatedLayout>
    );
}
