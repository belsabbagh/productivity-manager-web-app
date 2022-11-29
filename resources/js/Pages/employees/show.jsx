import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function show(props) {
    const {employee} = props
    return (
        <>
            <Head>
                <title>employees show</title>
            </Head>
            <h1>employees show page goes here</h1>
        </>
    );
}
