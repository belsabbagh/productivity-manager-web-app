import React from 'react';
import {useForm} from '@inertiajs/inertia-react';
import {Inertia} from '@inertiajs/inertia';
import {Button, Typography} from '@mui/material';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UserIcon from '@/Components/Icons/UserIcon';
import InputWithIcon from '@/Components/Inputs/InputWithIcon';
import UtilizationIcon from '@/Components/Icons/UtilizationIcon';
import UtilizationInput from '@/Components/Inputs/UtilizationInput';

export default function Edit(props) {
  const team = props.team.data;
  const projectId = props.project.id;
  const {setData, errors, put} = useForm({
    utilization: team.utilization,
  });

  function handleSubmit(e) {
    e.preventDefault();
    put(route(`projects.team.update`, {project: projectId, team: team.id}), {
      onSuccess: () => {
        alert('success');
      },
    });
  }

  const updateFormData = (e) => {
    setData((currentData) => ({
      ...currentData,
      [e.target.name]: e.target.value,
    }));
  };

  function destroy() {
    if (
      confirm(`Are you sure you want to remove this employee from the team?`)
    ) {
      Inertia.delete(
        route(`projects.team.destroy`, {project: projectId, team: team.id})
      );
    }
  }

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      title={'Edit team members'}
      backHref={`/projects/${projectId}`}
    >
      <div
        id="white container"
        className=" rounded-lg  bg-white flex flex-row justify-center"
      >
        <div id="form container" className="py-16 px-24">
          <Typography sx={{mb: 2}} variant="h5">
            {' '}
            Edit team member capacity{' '}
          </Typography>
          <div
            id="purple container"
            className=" rounded-lg  bg-content h-[350px]  w-[550px] flex flex-row justify-center pr-8 "
          >
            <div id="form" className="pt-16">
              <div
                id="team member name"
                className=" border rounded border-gray flex flex-row justify-start items-center mb-2"
              >
                <div
                  id="icon css"
                  className=" bg-content p-3 mr-1 border rounded border-gray flex flex-row justify-center items-center"
                >
                  <UserIcon svgClassName={'w-6 h-6'} />
                </div>
                <Typography sx={{minWidth: 1}} variant="h7">
                  {' '}
                  {team.employee.first_name +
                    ' ' +
                    team.employee.last_name}{' '}
                </Typography>
              </div>
              <InputWithIcon
                input={
                  <UtilizationInput
                    defaultValue={team.utilization}
                    onChange={updateFormData}
                  />
                }
                icon={<UtilizationIcon svgClassName={'w-6 h-6'} />}
                error={errors.utilization}
              />
              <Button
                style={{
                  backgroundColor: 'rgba(75, 0, 130, 0.3)',
                  color: 'black',
                  marginBottom: '2%',
                }}
                onClick={destroy}
              >
                remove from team
              </Button>{' '}
              <br />
              <Button
                style={{
                  backgroundColor: 'rgba(75, 0, 130, 0.3)',
                  color: 'black',
                }}
                onClick={handleSubmit}
              >
                save changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
