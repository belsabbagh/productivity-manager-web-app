import React from 'react';
import {Link, Head, useForm} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";

export default function edit(props) {
    const resource = 'project'
    const {project} = props
    const { data, setData, errors, put } = useForm({});
    function handleSubmit(e) {
        e.preventDefault();
        put(route(`${resource}s.update`, project.id));
    }
    function destroy() {
        if (confirm(`Are you sure you want to delete this ${resource}?`)) {
            Inertia.delete(route(`${resource}s.destroy`, project.id));
        }
    }
    return (
        <>
            <Head>
                <title>projects edit</title>
            </Head>
            <h1>projects edit page goes here</h1>
        </>
    );
}
