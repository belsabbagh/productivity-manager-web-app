import React from 'react';
import './../../../css/App.css';
import {useForm} from '@inertiajs/inertia-react';
import {
    Autocomplete,
    Button,
    TextField, Typography
} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextFieldWithIcon from "@/Components/TextFieldWithIcon";
import UserIcon from "@/Components/Icons/UserIcon";
import MailIcon from "@/Components/Icons/MailIcon";
import InputWithIcon from "@/Components/InputWithIcon";
import {VpnKeyOutlined} from "@mui/icons-material";

export default function create(props) {
    const resource = 'user'
    const {data, setData, errors, post} = useForm({});

    function handleSubmit(e) {
        e.preventDefault();
        post(route(`${resource}s.store`));
    }

    const updateFormData = (e) => {
        setData((currentData) => ({...currentData, [e.target.name]: e.target.value}));
    }
    const user_type = [
        {id: 1, name: 'admin'},
        {id: 2, name: 'developer'}];
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Users"}
            backHref={`/${resource}s`}
        >
            <div id="white container" className="rounded-lg px-48 py-16 bg-white">
                <div id="form container" className="px-48 pt-16">
                    <Typography sx={{mb: 2}} variant='h5'> Add a user </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextFieldWithIcon
                            label={'Name'}
                            icon={<UserIcon svgClassName={"w-6 h-6"}/>}
                            onChange={updateFormData}
                            error={errors.name}
                            name={'name'}
                        />
                        <TextFieldWithIcon
                            label={'Email'}
                            icon={<MailIcon svgClassName={"w-6 h-6"}/>}
                            onChange={updateFormData}
                            error={errors.email}
                            name={'email'}
                        />

                        <InputWithIcon
                            input={<TextField id="psw" type="password" sx={{minWidth: 1}} className="bg-content"
                                              required label="user's password" variant="outlined"/>}
                            icon={<VpnKeyOutlined className={"w-6 h-6"}/>}
                        />
                        <div id="user_type" className=" flex flex-row justify-start mb-2">
                            <div id="icon css"
                                 className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"/>
                                </svg>
                            </div>

                            <Autocomplete className="bg-content" sx={{minWidth: 1}}
                                          disablePortal
                                          id="combo-box-user-type"
                                          options={user_type}
                                          getOptionLabel={(i) => i.name}
                                          required
                                          renderInput={(params) => <TextField {...params} label="user type"/>}/>

                        </div>

                        <Button style={{backgroundColor: 'rgba(75, 0, 130, 0.3)', color: 'black'}}
                                onClick={handleSubmit}>
                            Add user
                        </Button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
