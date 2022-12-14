import {Link} from "@inertiajs/inertia-react";
import ApplicationLogo from "@/Components/Icons/ApplicationLogo";
import React from "react";
import ProfileLink from "@/Components/ProfileLink";
import BackIcon from "@/Components/Icons/BackIcon";

export default function Header({title, user = null, backHref}) {

    return (
        <div className="max-h-fit bg-background flex flex-row justify-between items-center">
            <Link href="/">
                <ApplicationLogo className="w-24 h-24"/>
            </Link>
            <div className="px-6 border-b-2 border-black flex flex-row items-center justify-between">
                <div className={'text-4xl font-bold'}>
                    {title}
                </div>
                {(user !== null) ? <ProfileLink user={user}/> : ""}
            </div>
            <Link className={'justify-center items-center pl-3 hover:bg-gray-400 font-bold py-2 px-4 rounded-lg'} href={backHref}>
                <BackIcon/>
            </Link>
        </div>
    )
}
