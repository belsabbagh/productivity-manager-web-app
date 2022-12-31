import React from 'react';
import {useForm} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";
import {Autocomplete, Button, Input, TextField, Typography} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputWithIcon from "@/Components/Inputs/InputWithIcon";
import UtilizationIcon from "@/Components/Icons/UtilizationIcon";
import NumberInput from "@/Components/Inputs/NumberInput";
import UtilizationInput from "@/Components/Inputs/UtilizationInput";

export default function edit(props) {
    const resource = 'team'
    const {assignment} = props
    const {data, setData, errors, post} = useForm({});

    function handleSubmit(e) {
        e.preventDefault();
        post(route(`${resource}s.update`, assignment.id));
    }

    const employee_names = [
        {
            id: 1, name: 'Jeff'
        },
        {
            id: 2, name: 'Steve'
        },
        {
            id: 3, name: 'Karen'
        }
    ];

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Add team member"}
        >
            <div id="white container" className=" rounded-lg  bg-white flex flex-row justify-center">
                <div id="form container" className="py-16 px-24">
                    <Typography sx={{mb: 2}} variant='h5'> add a new team member </Typography>
                    <div id="purple container"
                         className=" rounded-lg  bg-content h-[350px]  w-[550px] flex flex-row justify-center pr-8">

                        <div id="form" className=" pt-16">

                            <div id="team member" className="flex flex-row justify-start mb-2">
                                <div id="icon css"
                                     className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>

                                </div>
                                <Autocomplete sx={{minWidth: 1}} className="bg-content "
                                              disablePortal
                                              id="combo-box-team_leaders"
                                              options={employee_names}
                                              getOptionLabel={(i) => i.name}
                                              renderInput={(params) => <TextField {...params}
                                                                                  label="Team member name"/>}/>
                            </div>
                            <InputWithIcon
                                input={<UtilizationInput/>}
                                icon={<UtilizationIcon svgClassName={'w-6 h-6'}/>}
                            />
                            <Button style={{backgroundColor: 'rgba(75, 0, 130, 0.3)', color: 'black'}}
                                    onClick={handleSubmit}>
                                save changes
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
