import React from 'react';
import {useForm} from '@inertiajs/inertia-react';
import MultipleSelectCheckmarks from '@/Components/Inputs/Select/MultipleSelectCheckmarks';
import {Button, Typography} from '@mui/material';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UserIcon from '@/Components/Icons/UserIcon';
import TextFieldWithIcon from '@/Components/Inputs/TextFieldWithIcon';
import MailIcon from '@/Components/Icons/MailIcon';
import InputWithIcon from '@/Components/Inputs/InputWithIcon';
import SkillsIcon from '@/Components/Icons/SkillsIcon';

export default function Create(props) {
  const resource = 'employee';
  const {setData, errors, post} = useForm({
    firstName: '',
    lastName: '',
    email: '',
    skills: [],
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
          Add an employee{' '}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextFieldWithIcon
            label={'First name'}
            name={'firstName'}
            icon={<UserIcon svgClassName={'w-6 h-6'} />}
            onChange={updateFormData}
            error={errors.firstName}
          />
          <TextFieldWithIcon
            label={'Last name'}
            name={'lastName'}
            icon={<UserIcon svgClassName={'w-6 h-6'} />}
            onChange={updateFormData}
            error={errors.lastName}
          />
          <TextFieldWithIcon
            label={'Email'}
            name={'email'}
            icon={<MailIcon svgClassName={'w-6 h-6'} />}
            onChange={updateFormData}
            error={errors.email}
          />
          <InputWithIcon
            input={
              <MultipleSelectCheckmarks
                name={'skills'}
                label={'Skills'}
                onChange={updateFormData}
                data={props.skills}
              />
            }
            icon={<SkillsIcon svgClassName={'w-6 h-6'} />}
            error={errors.skills}
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
