import React from 'react';
import {useForm} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";
import {Button, TextField, Typography} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UserIcon from "@/Components/Icons/UserIcon";

export default function edit(props) {
    const resource = 'team'
    const {assignment} = props
    const {data, setData, errors, put} = useForm({});
    function handleSubmit(e) {
        e.preventDefault();
        put(route(`${resource}s.update`, assignment.id));
    }
    function destroy() {
        if (confirm(`Are you sure you want to delete this ${resource}?`)) {
            Inertia.delete(route(`${resource}s.destroy`, assignment.id));
        }
    }
    function handleChange(e) {
        e.preventDefault();
        const onlyNums = e.target.value
        console.log(onlyNums)
        if (onlyNums < 0) return
        this.setState({value: onlyNums});
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Edit team members"}
        >
            <div id="white container" className=" rounded-lg  bg-white flex flex-row justify-center">
                <div id="form container" className="py-16 px-24">
                    <Typography sx={{mb: 2}} variant='h5'> edit team member capacity </Typography>
                    <div id="purple container" className=" rounded-lg  bg-content h-[350px]  w-[550px] flex flex-row justify-center pr-8 ">
                        <div id="form" className="pt-16">
                            <form>
                                <div id="team member name" className="flex flex-row justify-start mb-2">
                                    <div id="icon css"
                                         className=" bg-content p-3 mr-1 border rounded border-gray flex flex-row justify-center items-center">
                                        <UserIcon svgClassName={'w-6 h-6'}/>
                                    </div>
                                    <Typography variant='h6'> name here </Typography>
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

                                <Button style={{
                                    backgroundColor: 'rgba(75, 0, 130, 0.3)',
                                    color: 'black',
                                    marginBottom: '2%'
                                }}
                                        onClick={destroy}>
                                    remove from team
                                </Button> <br/>

                                <Button style={{backgroundColor: 'rgba(75, 0, 130, 0.3)', color: 'black'}}
                                        onClick={handleSubmit}>
                                    save changes
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
