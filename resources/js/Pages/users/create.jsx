import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function create(props) {
    const resource = 'user'
    const {user} = props
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
