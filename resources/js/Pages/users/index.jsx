import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function index(props) {
    const {users} = props
    return (
        <>
            <Head>
                <title>users index</title>
            </Head>
            <h1>users index page goes here</h1>
        </>
    );
}
