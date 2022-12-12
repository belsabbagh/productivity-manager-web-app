import {Link} from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Typography} from "@mui/material";
import React from "react";
import {ArrowBack} from "@mui/icons-material";

export default function Header({title, user= null, backHref}){
    return (
        <div className="max-h-fit bg-background flex align-bottom">
            <Link href="/">
                <ApplicationLogo className="w-24 h-24"/>
            </Link>
            <div className="mx-auto mt-auto px-12 border-b-2 border-black">
                <Typography variant='h4'>
                    {title}
                </Typography>
            </div>
            <Link className={'justify-center items-center'} href={backHref}>
                <ArrowBack className="w-24 h-24"/>
            </Link>
        </div>
    )
}
