import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function create(props) {
    const resource = 'project'
    const {project} = props
    function handleSubmit(e) {
        e.preventDefault();
        post(route(`${resource}s.store`));
    }
    return (
        <>
            <Head>
                <title>projects create</title>
            </Head>
            <h1>projects create page goes here</h1>
        </>
    );
}
