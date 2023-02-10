import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {isAdmin} from '@/lib';
import PersonnelNav from '@/Components/PersonnelNav';
import IndexContent from '@/Components/IndexContent';
import IndexFilter from '@/Components/IndexContent/IndexFilters/IndexFilter';
import Table from '@/Components/Outputs/Table';
import {UserIndexTableRow} from '@/lib/factories/TableFactories';
import useUsersFilter from '@/hooks/useFilter/useUsersFilter';

export default function Index(props) {
  const [filteredData, filterValue, filterData] = useUsersFilter(
    props.users.data,
    {search: ''}
  );
  const userType = props.auth.user.user_type_id;
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Users'}
      backHref={'/dashboard'}
    >
      <PersonnelNav active={'users'} />
      <IndexContent
        resource={'user'}
        canCreate={isAdmin(userType)}
        indexQuery={
          <IndexFilter filter={filterValue} updateFilter={filterData} />
        }
      >
        <Table
          data={filteredData}
          getRowCells={UserIndexTableRow}
          headers={['Name', 'Email', 'Position', 'Show']}
        />
      </IndexContent>
    </AuthenticatedLayout>
  );
}
