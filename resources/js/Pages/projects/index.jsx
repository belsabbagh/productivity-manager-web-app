import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function index(props) {
    const {projects} = props
    return (
        <>
            <Head>
                <title>projects index</title>
            </Head>
            <h1>projects index page goes here</h1>
        </>
    );
}
