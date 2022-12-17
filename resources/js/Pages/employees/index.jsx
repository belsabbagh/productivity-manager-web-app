import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import EmployeesTable from "@/Components/EmployeesTable";
import {isAdmin} from "@/lib";
import CreateResource from "@/Components/CreateResource";
import EmployeeIndexContent from "@/Components/EmployeeIndexContent";
import MultipleSelectCheckmarks from "@/Components/MultipleSelectCheckmarks";

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
            <EmployeeIndexContent resource={'employee'} canCreate={isAdmin(userType)} skills={skills}>
                <EmployeesTable
                    data={employees}
                    firstColKey={'email'}
                />
            </EmployeeIndexContent>
        </AuthenticatedLayout>
    );
}
