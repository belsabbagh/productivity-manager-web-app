import React from 'react';
import TextDisplay from '@/Components/Outputs/TextDisplay';
import AttributeDisplay from '@/Components/Outputs/AttributeDisplay';
import ItemHeader from '@/Components/ItemHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CreateResource from '@/Components/Inputs/CreateResource';
import { isAdmin } from '@/lib';
import { Edit } from '@mui/icons-material';
import Table from '@/Components/Outputs/Table';
import { TeamIndexTableRowCells } from '@/lib/factories/TableFactories';
import EmployeeUtilization from '@/Components/Outputs/EmployeeUtilization';
import { Link } from '@inertiajs/inertia-react';
import { ArrowForwardIos } from '@mui/icons-material';

export default function Show(props) {
  let { project } = props;
  project = project.data;
  let userType = props.auth.user.user_type_id;
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Project Details'}
      backHref={'/projects'}
    >
      <div className="bg-white p-6 flex flex-col">
        <ItemHeader
          title={project.name + ' Details'}
          href={isAdmin(userType) ? `/projects/${project.id}/edit` : null}
          linkIcon={<Edit className={'w-6 h-6'} />}
        />
        <div className="flex-col justify-center bg-content rounded-lg px-8 py-4">
          <TextDisplay label={'Name'} value={project.name} className="mb-5" />
          <TextDisplay
            label={'Region'}
            value={project.region}
            className=" mb-5"
          />

          <AttributeDisplay label={'Leader'} className="mb-5">
            <Link
              href={`/users/${project.leader.id}`}
              style={{backgroundColor: '#4b00820d'}}
              className={
                'flex flex-row justify-between w-full rounded-lg hover:bg-gray p-2 bg-content'
              }
            >
              <div className="">{project.leader.name}</div>
              <div>
                <ArrowForwardIos sx={{ color: 'black' }} />
              </div>
            </Link>
          </AttributeDisplay>
          <AttributeDisplay label={'Utilization'} className="mb-5">
            <EmployeeUtilization
              value={project.leader_utilization}
              projectCount={project.leader.projects.length}
            />
          </AttributeDisplay>
          {project.team.length > 0 ? (
            <AttributeDisplay label={'Team'}>
              <Table
                data={project.team}
                getRowCells={TeamIndexTableRowCells}
                headers={['Email', 'Utilization', 'Edit']}
              />
            </AttributeDisplay>
          ) : (
            <TextDisplay label={'Team'} value={'None'} className=" mb-5" />
          )}
          <div className={'mr-auto mt-2'}>
            <CreateResource
              resource={'team'}
              label={'add team member'}
              href={`/projects/${project.id}/team/create`}
            />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
