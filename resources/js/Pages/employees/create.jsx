import React from 'react';
import {Link, Head, useForm} from '@inertiajs/inertia-react';

export default function create() {
    const resource = 'employee'
    const { data, setData, errors, post } = useForm({});
    function handleSubmit(e) {
        e.preventDefault();
        post(route(`${resource}s.store`));
    }
    return (
        <>
            <Head>
                <title>employees create</title>
            </Head>
            <h1>employees create page goes here</h1>
        </>
    );
}
