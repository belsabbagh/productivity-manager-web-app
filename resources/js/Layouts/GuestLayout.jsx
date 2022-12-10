import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/inertia-react';
import '../../css/app.css'
import {Typography} from "@mui/material";

export default function Guest({children, title}) {
    return (
        <div className="min-h-screen sm:justify-center items-center pt-6 sm:pt-0 background">
            <div className="max-h-fit flex align-bottom">
                <Link href="/">
                    <ApplicationLogo className="w-24 h-24"/>
                </Link>
                <div className="mx-auto mt-auto">
                    <Typography variant='h4'>
                        {title}
                    </Typography>
                </div>
                <Link href="/">
                    <ApplicationLogo className="opacity-0 w-24 h-24"/>
                </Link>
            </div>
            <div className="min-h-12 pt-12 flex sm:justify-center items-center">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 shadow-md overflow-hidden sm:rounded-lg content">
                    {children}
                </div>
            </div>
        </div>
    );
}
