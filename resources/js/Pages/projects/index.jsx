import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {isAdmin} from '@/lib';
import ProjectIndexFilter from '@/Components/IndexContent/IndexFilters/ProjectIndexFilter';
import IndexContent from '@/Components/IndexContent';
import Table from '@/Components/Outputs/Table';
import {ProjectIndexTableRowCells} from '@/lib/factories/TableFactories';
import useProjectsFilter from '@/hooks/useFilter/useProjectsFilter';

export default function Index(props) {
  let count = 0;
  let projects = props.projects.data.map((i) => {
    const ref = count;
    count++;
    return {
      ...i,
      region: {id: ref, name: i.region},
      team: i.team.map((j) => {
        return {
          ...j,
          skills: props.employees.data.filter((k) => k.id === j.id)[0].skills,
        };
      }),
    };
  });
  const regions = projects.map((i) => i.region);
  const [filteredData, filterValue, filterData] = useProjectsFilter(projects, {
    search: '',
    region: '',
    skill: '',
  });
  const userType = props.auth.user.user_type_id;
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Projects'}
      backHref={'/dashboard'}
    >
      <IndexContent
        indexQuery={
          <ProjectIndexFilter
            regions={regions}
            skills={props.skills}
            filter={filterValue}
            updateFilter={filterData}
          />
        }
        resource={'project'}
        canCreate={isAdmin(userType)}
      >
        <Table
          data={filteredData}
          getRowCells={ProjectIndexTableRowCells}
          headers={['Name', 'Leader', 'Show']}
        />
      </IndexContent>
    </AuthenticatedLayout>
  );
}
