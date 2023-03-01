import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextFieldWithIcon from '@/Components/Inputs/TextFieldWithIcon';
import UserIcon from '@/Components/Icons/UserIcon';
import ProjectsIcon from '@/Components/Icons/ProjectsIcon';
import InputWithIcon from '@/Components/Inputs/InputWithIcon';
import RegionIcon from '@/Components/Icons/RegionIcon';
import UtilizationInput from '@/Components/Inputs/UtilizationInput';
import UtilizationIcon from '@/Components/Icons/UtilizationIcon';
export default function Create(props) {
  const resource = 'project';
  const { data, setData, errors, post } = useForm({
    name: '',
    leader: null,
    region: '',
    leader_utilization: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route(`${resource}s.store`), {
      onSuccess: () => {
        alert('success');
      },
    });
  }

  const updateFormData = (e) => {
    console.log(e.target.name);
    setData((currentData) => ({
      ...currentData,
      [e.target.name]: e.target.value,
    }));
  };

  const regions = [
    {
      id: 1,
      name: 'Egypt',
    },
    {
      id: 2,
      name: 'SA',
    },
    {
      id: 3,
      name: 'UAE',
    },
  ];

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Projects'}
      backHref={`/${resource}s`}
    >
      <Head>
        <title>create a project</title>
      </Head>
      <div id="white container" className="rounded-lg px-32 py-12 bg-white">
        <Typography sx={{ mb: 2 }} variant="h5">
          {' '}
          Create a project
        </Typography>
        <form>
          <TextFieldWithIcon
            label={'Name'}
            name={'name'}
            icon={<ProjectsIcon svgClassName={'w-6 h-6'} />}
            onChange={updateFormData}
            error={errors.name}
          />

          <InputWithIcon
            input={
              <FormControl fullWidth>
                {' '}
                <InputLabel id="demo-simple-select-label">Leader</InputLabel>
                <Select
                  className="bg-content"
                  sx={{ minWidth: 1 }}
                  name={'leader'}
                  label={'leader'}
                  labelId="demo-simple-select-label"
                  required
                  value={data.leader}
                  onChange={updateFormData}
                >
                  {props.leaders.map((i) => {
                    return (
                      <MenuItem key={i.id} value={i.id}>
                        {' '}
                        {i.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            }
            icon={<UserIcon svgClassName={'w-6 h-6'} />}
            error={errors.leader}
          />
          <InputWithIcon
            input={
              <UtilizationInput
                onChange={updateFormData}
                name={'leader_utilization'}
              />
            }
            icon={<UtilizationIcon svgClassName={'w-6 h-6'} />}
            error={errors.leader_utilization}
          />

          <InputWithIcon
            input={
              <Autocomplete
                sx={{ minWidth: 1 }}
                className="bg-content "
                disablePortal
                id="combo-box-regions"
                options={regions}
                getOptionLabel={(i) => i.name}
                name={'region'}
                required
                renderInput={(params) => (
                  <TextField
                    onChange={updateFormData}
                    {...params}
                    label="Region"
                    name={'region'}
                  />
                )}
              />
            }
            icon={<RegionIcon svgClassName={'w-6 h-6'} />}
            error={errors.region}
          />
          <Button
            style={{ backgroundColor: 'rgba(75, 0, 130, 0.3)', color: 'black' }}
            onClick={handleSubmit}
          >
            Add project
          </Button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
