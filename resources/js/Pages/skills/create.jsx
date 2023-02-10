import React from 'react';
import {useForm} from '@inertiajs/inertia-react';
import {Button, Typography} from '@mui/material';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextFieldWithIcon from '@/Components/Inputs/TextFieldWithIcon';
import SkillsIcon from '@/Components/Icons/SkillsIcon';

export default function Create(props) {
  const resource = 'skill';
  const {data, setData, errors, post} = useForm({
    name: '',
  });

  const updateFormData = (e) => {
    setData((currentData) => ({
      ...currentData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route(`${resource}s.store`), {
      onSuccess: () => alert('success'),
    });
  };

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Employees'}
      backHref={`/${resource}s`}
    >
      <div id="white container" className="rounded-lg px-48 py-16 bg-white">
        <Typography sx={{mb: 2}} variant="h5">
          {' '}
          Add a Skill{' '}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextFieldWithIcon
            label={'Name'}
            name={'name'}
            icon={<SkillsIcon svgClassName={'w-6 h-6'} />}
            onChange={updateFormData}
            error={errors.firstName}
          />
          <Button
            style={{backgroundColor: 'rgba(75, 0, 130, 0.3)', color: 'black'}}
            onClick={handleSubmit}
          >
            Add employee
          </Button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
