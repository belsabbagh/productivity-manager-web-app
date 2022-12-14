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
            <div id="white container" className=" rounded-lg  bg-white h-[550px]  w-[750px] ">


                <div id="form container" className="px-48 pt-16">
                    <Typography sx={{mb: 2}} variant='h5'> add a new team member </Typography>
                    <div id="purple container" className=" rounded-lg  bg-content h-[350px]  w-[550px] ">

                        <div id="form">


                            <Autocomplete sx={{mb:2}} className="bg-content "
                                          disablePortal
                                          id="combo-box-team_leaders"
                                          options={employee_names}
                                          getOptionLabel={(i)=>i.name}
                                          renderInput={(params) => <TextField {...params} label="Team member name"/>}/>
                            <TextField  id="text_inputs" type="number" sx={{mb:2, minWidth:1}} className="bg-content " label="project capacity" variant="outlined"/>

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
