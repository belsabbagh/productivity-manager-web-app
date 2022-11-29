import React from 'react';
import {Link, Head, useForm} from '@inertiajs/inertia-react';

export default function create() {
    const resource = 'user'
    const { data, setData, errors, post } = useForm({});
    function handleSubmit(e) {
        e.preventDefault();
        post(route(`${resource}s.store`));
    }
    return (
        <>
            <Head>
                <title>users create</title>
            </Head>
            <h1>users create page goes here</h1>
        </>
    );
}
