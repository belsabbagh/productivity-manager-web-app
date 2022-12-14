import React from 'react';
import {Link, Head, useForm} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";
import {Autocomplete, Button, TextField, Typography} from "@mui/material";

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
        <div id="background" className=" min-h-screen bg-background">
            <Head>
                <title>edit team members</title>
            </Head>
            <div id="white container" className=" rounded-lg  bg-white h-[550px]  w-[750px] ">


                <div id="form container" className="px-48 pt-16">


                    <Typography sx={{mb: 2}} variant='h5'> Edit the project </Typography>
                    <form>
                        <TextField  id="text_inputs" sx={{mb:2, minWidth:1}} className="bg-content " label="Project name" variant="outlined"/>

                        <Autocomplete sx={{mb:2}} className="bg-content "
                                      disablePortal
                                      id="combo-box-team_leaders"
                                      options={teamleader_names}
                                      getOptionLabel={(i)=>i.name}

                                      renderInput={(params) => <TextField {...params} label="team leader"/>}/>

                        <Autocomplete sx={{mb:2}} className="bg-content "
                                      disablePortal
                                      id="combo-box-regions"
                                      options={regions}
                                      getOptionLabel={(i)=>i.name}


                                      renderInput={(params) => <TextField {...params} label="regions"/>}/>



                        <Button style={{backgroundColor: 'rgba(75, 0, 130, 0.3)', color: 'black'}}
                                onClick={handleSubmit}>
                            Add project
                        </Button>


                    </form>


                </div>

            </div>

        </div>


    );
}
