import React from 'react';
import TextDisplay from '@/Components/Outputs/TextDisplay';
import {Edit} from '@mui/icons-material';
import ItemHeader from '@/Components/ItemHeader';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {isAdmin} from '@/lib';

export default function Show(props) {
  let {skill} = props;
  skill = skill.data;
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Skill Details'}
      backHref={'/skills'}
    >
      <div className="bg-white min-w-full p-6 flex flex-col">
        <ItemHeader
          title={skill.name + ' Details'}
          href={
            isAdmin(props.auth.user.user_type_id)
              ? `/skills/${skill.id}/edit`
              : null
          }
          linkIcon={<Edit className={'w-6 h-6'} />}
        />
        <div className="flex-col justify-center bg-content rounded-lg px-8 py-4">
          <TextDisplay label={'Name'} value={skill.name} className="mb-5" />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
