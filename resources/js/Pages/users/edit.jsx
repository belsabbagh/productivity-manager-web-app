import React from 'react';
import './../../../css/App.css';
import {useForm} from '@inertiajs/inertia-react';
import {
    Button,
    TextField, Typography
} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Inertia} from "@inertiajs/inertia";
import UserIcon from "@/Components/Icons/UserIcon";
import MailIcon from "@/Components/Icons/MailIcon";
import TextFieldWithIcon from "@/Components/Inputs/TextFieldWithIcon";
import InputWithIcon from "@/Components/Inputs/InputWithIcon";
import {VpnKeyOutlined} from "@mui/icons-material";

export default function edit(props) {
    const resource = 'user'
    const resourcePlural = `${resource}s`
    const {user} = props
    const {data, setData, errors, put} = useForm({
        name: user.name,
        email: user.email,
        password: ''
    });

    const updateFormData = (e) => {
        setData((currentData) => ({...currentData, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        put(route(`${resourcePlural}.update`, user.id));
    }

    function destroy() {
        if (confirm(`Are you sure you want to delete this ${resource}?`)) {
            Inertia.delete(route(`${resourcePlural}.destroy`, employee.id));
        }
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Users"}
            backHref={`/${resourcePlural}/${user.id}`}
        >
            <div id="white container" className="rounded-lg px-48 py-16 bg-white">
                <Typography sx={{mb: 2}} variant='h5'> edit a user </Typography>

                <form onSubmit={handleSubmit}>
                    <TextFieldWithIcon
                        label={'Name'}
                        icon={<UserIcon svgClassName={"w-6 h-6"}/>}
                        initialValue={user.name}
                        onChange={updateFormData}
                        error={errors.name}
                        name={'name'}
                    />
                    <TextFieldWithIcon
                        label={'Email'}
                        icon={<MailIcon svgClassName={"w-6 h-6"}/>}
                        initialValue={user.email}
                        onChange={updateFormData}
                        error={errors.email}
                        name={'email'}
                    />

                    <InputWithIcon
                        input={<TextField id="psw" type="password" sx={{minWidth: 1}} className="bg-content"
                                          required label="user's password" variant="outlined"/>}
                        icon={<VpnKeyOutlined className={"w-6 h-6"}/>}
                    />
                    <Button type={'submit'}
                            sx={{
                                mr: 1,
                                backgroundColor: 'rgba(75, 0, 130, 0.3)',
                                color: 'black'
                            }}
                    >
                        edit {resource}
                    </Button>
                    {
                        props.auth.user.user_type_id === 3 ? <Button
                            sx={{
                                mr: 1,
                                backgroundColor: 'rgba(75, 0, 130, 0.3)',
                                color: 'black'
                            }} onClick={destroy}
                        >
                            delete {resource}
                        </Button> : null}
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
