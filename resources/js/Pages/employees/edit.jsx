import React from 'react';
import './../../../css/App.css';
import {useForm} from '@inertiajs/inertia-react';
import MultipleSelectCheckmarks from '@/Components/Inputs/Select/MultipleSelectCheckmarks';
import {
    Button,
    TextField, Typography
} from "@mui/material";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Inertia} from "@inertiajs/inertia";

export default function edit(props) {
    const resource = 'employee'
    const resourcePlural = `${resource}s`
    const employee = props.employee.data
    console.log(employee)
    const {data, setData, errors, put} = useForm({});

    function handleSubmit(e) {
        e.preventDefault();
        put(route(`${resourcePlural}.update`, employee.id));
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
            title={"Employees"}
            backHref={`/${resourcePlural}/${employee.id}`}
        >
            <div id="white container" className=" rounded-lg  bg-white">
                <div id="form container" className="px-48 py-16">
                    <Typography sx={{mb: 2}} variant='h5'> edit an employee </Typography>
                    <form>

                        <div id="employee first name" className="flex flex-row justify-start mb-2">
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
                                       label="employee first name" variant="outlined" required defaultValue={employee.first_name}/>

                        </div>

                        <div id="employee last name" className="flex flex-row justify-start mb-2">
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
                                       label="employee last name" variant="outlined" required defaultValue={employee.last_name}/>

                        </div>

                        <div id="email" className=" flex flex-row justify-start mb-2">
                            <div id="icon css"
                                 className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                </svg>
                            </div>

                            <TextField id="email" sx={{minWidth: 1}} className="bg-content "
                                       label="employee's email" variant="outlined" required defaultValue={employee.email}/>
                        </div>

                        <div id="skills" className=" flex flex-row justify-start mb-2">
                            <div id="icon css"
                                 className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"/>
                                </svg>
                            </div>
                            <MultipleSelectCheckmarks data={props.skills}
                                                      label="employee's skills" variant="outlined" values={employee.skills.map(i => i.name)}/>
                        </div>

                        <Button
                            sx={{
                                mr: 1,
                                backgroundColor: 'rgba(75, 0, 130, 0.3)',
                                color: 'black'
                            }} onClick={handleSubmit}
                        >
                            edit {resource}
                        </Button>
                        <Button
                            sx={{
                                mr: 1,
                                backgroundColor: 'rgba(75, 0, 130, 0.3)',
                                color: 'black'
                            }} onClick={destroy}
                        >
                            delete {resource}
                        </Button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
