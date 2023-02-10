import React from 'react';
import TextDisplay from '@/Components/Outputs/TextDisplay';
import ItemHeader from '@/Components/ItemHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ProjectDisplay from '@/Components/Outputs/ProjectDisplay';
import {Edit} from '@mui/icons-material';
import {isAdmin} from '@/lib';

export default function Show(props) {
  let {user} = props;
  user = user.data;
  const userId = props.auth.user.id;
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'User Details'}
      backHref={'/users'}
    >
      <div className="bg-white p-6 flex flex-col" style={{minWidth: '150%'}}>
        <ItemHeader
          title={user.name + ' Details'}
          href={
            isAdmin(props.auth.user.user_type_id) || userId === user.id
              ? `/users/${user.id}/edit`
              : null
          }
          linkIcon={<Edit className={'w-6 h-6'} />}
        />
        <div className="flex-col justify-center bg-content rounded-lg px-8 py-4">
          <TextDisplay label={'Name'} value={user.name} className="mb-5" />
          <TextDisplay label={'Email'} value={user.email} className=" mb-5" />
          <TextDisplay
            label={'User type'}
            value={user.user_type.name}
            className=" mb-5"
          />
          {user.projects.length > 0 ? (
            <ProjectDisplay
              label={'Projects'}
              resource={'projects'}
              data={user.projects}
              itemValueKey={'name'}
              className="w-full"
            />
          ) : (
            <TextDisplay label={'Projects'} value={'None'} className=" mb-5" />
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
