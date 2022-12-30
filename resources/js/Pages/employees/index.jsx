import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {isAdmin} from "@/lib";
import PersonnelNav from "@/Components/PersonnelNav";
import IndexContent from "@/Components/IndexContent";
import EmployeeIndexFilter from "@/Components/IndexContent/IndexFilters/EmployeeIndexFilter";
import Table from "@/Components/Tables/Table";
import {createEmployeeIndexTableRow} from "@/lib/factories";

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
                <Table
                    data={employees}
                    getRowCells={createEmployeeIndexTableRow}
                    headers={['Email', 'Utilization', 'Show']}
                />
            </IndexContent>
        </AuthenticatedLayout>
    );
}
