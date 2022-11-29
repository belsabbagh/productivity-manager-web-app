import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function index(props) {
    const {employees} = props
    return (
        <>
            <Head>
                <title>employees index</title>
            </Head>
            <h1>employees index page goes here</h1>
        </>
    );
}
