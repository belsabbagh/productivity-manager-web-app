import React from 'react';
import {Link, Head, useForm} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";
import {Autocomplete, Button, TextField, Typography} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function edit(props) {
    const resource = 'project'
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


    const teamleader_names = [
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

    const regions = [
        {
            id: 1, name: 'Egypt'
        },
        {
            id: 2, name: 'SA'
        },
        {
            id: 3, name: 'UAE'
        }
    ];


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Projects"}
            backHref={`/${resource}s`}
        >
            <Head>
                <title>create a project</title>
            </Head>
            <div id="white container" className="rounded-lg px-48 py-16 bg-white">

                <Typography sx={{mb: 2}} variant='h5'> Edit the project </Typography>
                <form>
                    <div id="project name" className="flex flex-row justify-start mb-2">
                        <div id="icon css"
                             className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"/>
                            </svg>
                        </div>

                        <TextField id="text_inputs" sx={{minWidth: 1}} className="bg-content "
                                   label="Project name" variant="outlined"/>

                    </div>
                    <div id="leader" className=" flex flex-row justify-start mb-2">
                        <div id="icon css"
                             className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <Autocomplete className="bg-content" sx={{minWidth: 1}}
                                      disablePortal
                                      id="combo-box-team_leaders"
                                      options={teamleader_names}
                                      getOptionLabel={(i) => i.name}

                                      renderInput={(params) => <TextField {...params} label="team leader"/>}/>
                    </div>
                    <div id="region" className="flex flex-row justify-start mb-2">
                        <div id="icon css"
                             className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"/>
                            </svg>
                        </div>
                        <Autocomplete sx={{minWidth: 1}} className="bg-content "
                                      disablePortal
                                      id="combo-box-regions"
                                      options={regions}
                                      getOptionLabel={(i) => i.name}

                                      renderInput={(params) => <TextField {...params} label="region"/>}/>
                    </div>
                    <Button style={{backgroundColor: 'rgba(75, 0, 130, 0.3)', color: 'black'}}
                            onClick={handleSubmit}>
                        Add project
                    </Button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
