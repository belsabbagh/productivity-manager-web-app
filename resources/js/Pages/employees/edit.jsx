import React from 'react';
import {Link, Head, useForm} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";

export default function edit(props) {
    const resource = 'employee'
    const {employee} = props
    const { data, setData, errors, put } = useForm({});
    function handleSubmit(e) {
        e.preventDefault();
        put(route(`${resource}s.update`, employee.id));
    }
    function destroy() {
        if (confirm(`Are you sure you want to delete this ${resource}?`)) {
            Inertia.delete(route(`${resource}s.destroy`, employee.id));
        }
    }
    return (
        <>
            <Head>
                <title>employees edit</title>
            </Head>
            <h1>employees edit page goes here</h1>
        </>
    );
}
