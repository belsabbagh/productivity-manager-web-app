import React from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
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
import ProjectsIcon from '@/Components/Icons/ProjectsIcon';
import InputWithIcon from '@/Components/Inputs/InputWithIcon';
import UserIcon from '@/Components/Icons/UserIcon';
import RegionIcon from '@/Components/Icons/RegionIcon';
import UtilizationInput from '@/Components/Inputs/UtilizationInput';
import UtilizationIcon from '@/Components/Icons/UtilizationIcon';

export default function Edit(props) {
  const resource = 'project';
  const resourcePlural = `${resource}s`;
  const project = props.project.data;
  const { data, setData, errors, put } = useForm({
    name: project.name,
    leader: project.leader.id,
    leader_utilization: project.leader_utilization,
    region: project.region,
  });
  function handleSubmit(e) {
    e.preventDefault();
    put(route(`${resource}s.update`, project.id), {
      onSuccess: () => {
        console.log(data);
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

  function destroy() {
    if (confirm(`Are you sure you want to delete this ${resource}?`)) {
      Inertia.delete(route(`${resourcePlural}.destroy`, project.id));
    }
  }
  console.log(data)

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
    {
      id: 4,
      name: 'Spain',
    },
  ];

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Projects'}
      backHref={`/${resourcePlural}/${project.id}`}
    >
      <Head>
        <title>create a project</title>
      </Head>
      <div id="white container" className="rounded-lg px-48 py-16 bg-white">
        <Typography sx={{ mb: 2 }} variant="h5">
          {' '}
          Edit the project{' '}
        </Typography>
        <form>
          <TextFieldWithIcon
            label={'Name'}
            name={'name'}
            icon={<ProjectsIcon svgClassName={'w-6 h-6'} />}
            onChange={updateFormData}
            error={errors.name}
            initialValue={data.name}
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
                  defaultValue={data.leader}
                >
                  {props.leaders.map((i) => {
                    return <MenuItem value={i.id}> {i.name}</MenuItem>;
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
                defaultValue={project.leader_utilization}
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
                defaultValue={{
                  name: data.region,
                }}
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
            sx={{
              mr: 1,
              backgroundColor: 'rgba(75, 0, 130, 0.3)',
              color: 'black',
            }}
            onClick={handleSubmit}
          >
            edit {resource}
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
    </AuthenticatedLayout>
  );
}
