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
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function edit(props) {
    const resource = 'employee'
    const { data, setData, errors, post } = useForm({});
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
            /**
             * On autofill we get a stringified value.
             */
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const user_type=[
        {id:1,  name: 'admin'},
        {id:2, name:'developer'}];
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Users"}
            backHref={'/dashboard'}
        >
            <div id="white container" className=" rounded-lg  bg-white">
                <div id="form container" className="px-48 py-16">
                    <Typography sx={{mb: 2}} variant='h5'> edit a user </Typography>

                    <form>

                        <div id="user name" className="flex flex-row justify-start mb-2">
                            <div id="icon css"
                                 className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>

                            <TextField id="text_inputs" sx={{minWidth: 1}} className="bg-content "
                                       label="user's name" variant="outlined"/>

                        </div>

                        <div id="email" className=" flex flex-row justify-start mb-2">
                            <div id="icon css"
                                 className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                </svg>
                            </div>

                            <TextField id="email" sx={{minWidth: 1}} className="bg-content "
                                       label="user's email" variant="outlined"/>
                        </div>

                        <div id="psw" className=" flex flex-row justify-start mb-2">
                            <div id="icon css"
                                 className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/>
                                </svg>

                            </div>

                            <TextField id="psw" type= "password" sx={{minWidth: 1}} className="bg-content "
                                       label="user's password" variant="outlined"/>
                        </div>



                        <Button style={{backgroundColor: 'rgba(75, 0, 130, 0.3)', color: 'black'}}
                                onClick={handleSubmit}>
                            edit user
                        </Button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
