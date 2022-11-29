import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function create(props) {
    const resource = 'employee'
    const {employee} = props
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
