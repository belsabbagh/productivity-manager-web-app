import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {isAdmin} from '@/lib';
import PersonnelNav from '@/Components/PersonnelNav';
import IndexContent from '@/Components/IndexContent';
import UserIndexFilter from '@/Components/IndexContent/IndexFilters/UserIndexFilter';
import Table from '@/Components/Outputs/Table';
import {SkillIndexTableRowCells} from '@/lib/factories/TableFactories';

export default function index(props) {
  const skills = props.skills;
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Skills'}
      backHref={'/dashboard'}
    >
      <IndexContent
        indexQuery={<UserIndexFilter skills={skills} />}
        resource={'skill'}
        canCreate={isAdmin(props.auth.user.user_type_id)}
      >
        <Table
          data={skills}
          getRowCells={SkillIndexTableRowCells}
          headers={['Name', 'Show']}
        />
      </IndexContent>
    </AuthenticatedLayout>
  );
}
