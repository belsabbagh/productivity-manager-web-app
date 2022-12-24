import React from 'react';
import './../../../css/App.css';
import {Head, useForm} from '@inertiajs/inertia-react';
import {
    Autocomplete,
    Button,
    TextField, Typography
} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextFieldWithIcon from "@/Components/TextFieldWithIcon";
import UserIcon from "@/Components/Icons/UserIcon";
import ProjectsIcon from "@/Components/Icons/ProjectsIcon";
import InputWithIcon from "@/Components/InputWithIcon";
import MultipleSelectCheckmarks from "@/Components/MultipleSelectCheckmarks";
import SkillsIcon from "@/Components/Icons/SkillsIcon";
import RegionIcon from "@/Components/Icons/RegionIcon";


export default function create(props) {
    const resource = 'project'
    const {data, setData, errors, post} = useForm({
        name: '',
        leader: null,
        region: ''
    });
    const leaders = props.leaders

    function handleSubmit(e) {
        e.preventDefault();
        post(route(`${resource}s.store`));
    }

    const updateFormData = (e) => {
        setData((currentData) => ({...currentData, [e.target.name]: e.target.value}));
    }

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
            <div id="white container" className="rounded-lg px-32 py-12 bg-white">


                <Typography sx={{mb: 2}} variant='h5'> Create a project</Typography>
                <form>
                    <TextFieldWithIcon
                        label={'Name'} name={'firstName'}
                        icon={<ProjectsIcon svgClassName={'w-6 h-6'}/>}
                        onChange={updateFormData}
                        error={errors.name}
                    />

                    <InputWithIcon
                        input={<Autocomplete
                            className="bg-content" sx={{minWidth: 1}}
                            disablePortal
                            id="combo-box-team_leaders"
                            options={leaders}
                            onChange={updateFormData}
                            getOptionLabel={(i) => i.name}
                            required
                            renderInput={(params) => <TextField {...params} label="Team leader"/>}
                        />}
                        icon={<UserIcon svgClassName={'w-6 h-6'}/>}
                        error={errors.leader}
                    />

                    <InputWithIcon
                        input={
                            <Autocomplete
                                sx={{minWidth: 1}} className="bg-content "
                                disablePortal
                                id="combo-box-regions"
                                options={regions}
                                getOptionLabel={(i) => i.name}
                                onChange={updateFormData}
                                required
                                renderInput={(params) => <TextField {...params} label="Region"/>}
                            />
                        }
                        icon={<RegionIcon svgClassName={'w-6 h-6'}/>}
                        error={errors.region}
                    />
                    <Button style={{backgroundColor: 'rgba(75, 0, 130, 0.3)', color: 'black'}}
                            onClick={handleSubmit}>
                        Add project
                    </Button>
                </form>
            </div>
        </AuthenticatedLayout>
    );

}
