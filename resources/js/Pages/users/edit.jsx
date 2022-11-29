import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";

export default function edit(props) {
    const resource = 'user'
    const {user} = props
    function handleSubmit(e) {
        e.preventDefault();
        put(route(`${resource}s.update`, user.id));
    }
    function destroy() {
        if (confirm(`Are you sure you want to delete this ${resource}?`)) {
            Inertia.delete(route(`${resource}s.destroy`, user.id));
        }
    }
    return (
        <>
            <Head>
                <title>users edit</title>
            </Head>
            <h1>users edit page goes here</h1>
        </>
    );
}
