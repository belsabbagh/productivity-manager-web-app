import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {isAdmin} from '@/lib';
import PersonnelNav from '@/Components/PersonnelNav';
import IndexContent from '@/Components/IndexContent';
import EmployeeIndexFilter from '@/Components/IndexContent/IndexFilters/EmployeeIndexFilter';
import Table from '@/Components/Outputs/Table';
import {EmployeeIndexTableRowCells} from '@/lib/factories/TableFactories';
import useEmployeesFilter from '@/hooks/useFilter/useEmployeesFilter';
const MAX_UTILIZATION = 3;
export default function Index(props) {
  const employees = props.employees.data;
  const [filteredData, filterValue, filterData] = useEmployeesFilter(
    employees,
    {
      search: '',
      skill: '',
      utilization: [0, MAX_UTILIZATION],
    }
  );
  const skills = props.skills;
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Employees'}
      backHref={'/dashboard'}
    >
      <PersonnelNav active={'employees'} />
      <IndexContent
        indexQuery={
          <EmployeeIndexFilter
            skills={skills}
            filter={filterValue}
            updateFilter={filterData}
          />
        }
        resource={'employee'}
        canCreate={isAdmin(props.auth.user.user_type_id)}
      >
        <Table
          data={filteredData}
          getRowCells={EmployeeIndexTableRowCells}
          headers={['Email', 'Utilization', 'Show']}
        />
      </IndexContent>
    </AuthenticatedLayout>
  );
}
