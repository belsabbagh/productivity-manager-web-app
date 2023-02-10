import React from 'react';
import AttributeDisplay from '@/Components/Outputs/AttributeDisplay';
import TextDisplay from '@/Components/Outputs/TextDisplay';
import ListDisplay from '@/Components/Outputs/ListDisplay';
import EmployeeUtilization from '@/Components/Outputs/EmployeeUtilization';
import {Edit, Person} from '@mui/icons-material';
import ItemHeader from '@/Components/ItemHeader';
import ProjectDisplay from '@/Components/Outputs/ProjectDisplay';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {isAdmin} from '@/lib';

export default function Show(props) {
  let {employee} = props;
  employee = employee.data;
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Employee Details'}
      backHref={'/employees'}
    >
      <div className="bg-white min-w-full p-6 flex flex-col">
        <ItemHeader
          title={employee.first_name + ' Details'}
          href={
            isAdmin(props.auth.user.user_type_id)
              ? `/employees/${employee.id}/edit`
              : null
          }
          linkIcon={<Edit className={'w-6 h-6'} />}
        />
        <div className="flex-col justify-center bg-content rounded-lg px-8 py-4">
          <div className="flex flex-row justify-center mb-3">
            <Person className="w-64 h-64" />
          </div>
          <TextDisplay
            label={'Name'}
            value={`${employee.first_name} ${employee.last_name}`}
            className="mb-5"
          />
          <TextDisplay
            label={'Email'}
            value={employee.email}
            className=" mb-5"
          />
          {employee.skills.length > 0 ? (
            <ListDisplay
              label={'Skills'}
              data={employee.skills}
              itemValueKey={'name'}
              className=" w-full mb-5"
            />
          ) : (
            <TextDisplay label={'Skills'} value={'None'} className=" mb-5" />
          )}
          {employee.projects.length > 0 ? (
            <ProjectDisplay
              label={'Project'}
              resource={'projects'}
              data={employee.projects}
              itemValueKey={'name'}
              className="w-full"
            />
          ) : (
            <TextDisplay label={'Projects'} value={'None'} className=" mb-5" />
          )}
          <AttributeDisplay label={'Utilization'} className="mb-5">
            <EmployeeUtilization
              value={employee.total_utilization}
              projectCount={employee.projects.length}
            />
          </AttributeDisplay>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
