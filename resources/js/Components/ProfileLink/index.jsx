import React from "react";
import {Link} from "@inertiajs/inertia-react";
import {Logout} from "@mui/icons-material";

export default function ProfileLink({user}) {
    return (
        <div className={'flex flex-row justify-between'}>
            <div className={'flex flex-row pr-2'}>
                <div className={'pr-2 mr-2 mb-1 border-r-2 border-gray-100'}>welcome</div>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
            </div>

            <Link href={route('logout')} method="post" as="button"><Logout/></Link>
        </div>
    )
}
