import React from 'react';
import './../../../css/App.css';
import {Link, Head, useForm} from '@inertiajs/inertia-react';
import MultipleSelectCheckmarks from '@/Components/MultipleSelectCheckmarks';
import {
    Autocomplete,
    Button,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem, OutlinedInput,
    Select,
    TextField, Typography
} from "@mui/material";




export default function create() {
    const resource = 'project'
    const {data, setData, errors, post} = useForm({});

    function handleSubmit(e) {
        e.preventDefault();
        post(route(`${resource}s.store`));
    }


    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
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
                <title>create a project</title>
            </Head>
            <div id="white container" className=" rounded-lg  bg-white h-[550px]  w-[750px] ">


                <div id="form container" className="px-48 pt-16">
                    <Typography  sx={{mb:2}} variant='h5'> Create a project</Typography>
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
