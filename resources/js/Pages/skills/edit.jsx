import React from 'react';
import {useForm} from '@inertiajs/inertia-react';
import {Button, Typography} from '@mui/material';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Inertia} from '@inertiajs/inertia';
import TextFieldWithIcon from '@/Components/Inputs/TextFieldWithIcon';
import SkillsIcon from '@/Components/Icons/SkillsIcon';

export default function Edit(props) {
  const resource = 'skill';
  const resourcePlural = `${resource}s`;
  const skill = props.skill.data;
  const {setData, errors, put} = useForm({
    name: skill.name,
  });
  const updateFormData = (e) => {
    setData((currentData) => ({
      ...currentData,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    put(route(`${resourcePlural}.update`, skill.id), {
      onSuccess: () => alert('success'),
    });
  }

  function destroy() {
    if (confirm(`Are you sure you want to delete this ${resource}?`)) {
      Inertia.delete(route(`${resourcePlural}.destroy`, skill.id));
    }
  }

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Employees'}
      backHref={`/${resourcePlural}/${skill.id}`}
    >
      <div id="white container" className=" rounded-lg  bg-white">
        <div id="form container" className="px-48 py-16">
          <Typography sx={{mb: 2}} variant="h5">
            {' '}
            Edit {skill.name}{' '}
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextFieldWithIcon
              label={'Name'}
              name={'name'}
              initialValue={skill.name}
              icon={<SkillsIcon svgClassName={'w-6 h-6'} />}
              onChange={updateFormData}
              error={errors.firstName}
            />
            <Button
              sx={{
                mr: 1,
                backgroundColor: 'rgba(75, 0, 130, 0.3)',
                color: 'black',
              }}
              onClick={handleSubmit}
            >
              save {resource}
            </Button>
            <Button
              sx={{
                mr: 1,
                backgroundColor: 'rgba(75, 0, 130, 0.3)',
                color: 'black',
              }}
              onClick={destroy}
            >
              delete {resource}
            </Button>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
