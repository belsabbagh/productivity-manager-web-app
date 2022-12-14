import {Link} from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Typography} from "@mui/material";
import React from "react";
import {ArrowBack} from "@mui/icons-material";
import ProfileLink from "@/Components/ProfileLink";

export default function Header({title, user = null, backHref}) {

    return (
        <div className="max-h-fit bg-background flex flex-row justify-between items-center">
            <Link href="/">
                <ApplicationLogo className="w-24 h-24"/>
            </Link>
            <div className="px-8 border-b-2 border-black flex flex-row items-end justify-between">
                <Typography variant='h4'>
                    {title}
                </Typography>
                {(user !== null) ? <ProfileLink user={user}/> : ""}
            </div>
            <Link className={'justify-center items-center'} href={backHref}>
                <ArrowBack className="w-24 h-24"/>
            </Link>
        </div>
    )
}
