import React from 'react';
import {Link, Head, useForm} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";
import {Autocomplete, Button, TextField, Typography} from "@mui/material";

export default function edit(props) {
    const resource = 'team'
    const {project} = props
    const {data, setData, errors, put} = useForm({});

    function handleSubmit(e) {
        e.preventDefault();
        put(route(`${resource}s.update`, project.id));
    }

    function destroy() {
        if (confirm(`Are you sure you want to delete this ${resource}?`)) {
            Inertia.delete(route(`${resource}s.destroy`, project.id));
        }
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
        <div id="background" className=" min-h-screen bg-background">
            <Head>
                <title>add a team member </title>
            </Head>
            <div id="white container"
                 className=" rounded-lg  bg-white h-[550px]  w-[750px] flex flex-row justify-center">


                <div id="form container" className="px-48 pt-16 ">
                    <Typography sx={{mb: 2}} variant='h5'> add a new team member </Typography>
                    <div id="purple container" className=" rounded-lg  bg-content h-[350px]  w-[550px] flex flex-row justify-center pr-8">

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
                            <div id="capacity" className="flex flex-row justify-start mb-2">
                                <div id=" icon css"
                                     className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/>
                                    </svg>
                                </div>
                                <TextField id="text_inputs" type="number" sx={{minWidth: 1}} className="bg-content "
                                           label="project capacity" variant="outlined"/>
                            </div>
                            <Button style={{backgroundColor: 'rgba(75, 0, 130, 0.3)', color: 'black'}}
                                    onClick={handleSubmit}>
                                save changes
                            </Button>
                        </div>

                    </div>


                </div>

            </div>

        </div>


    );
}
