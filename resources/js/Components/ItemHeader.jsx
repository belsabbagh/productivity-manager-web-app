import {Edit} from "@mui/icons-material";
import React from "react";
import {Link} from "@inertiajs/inertia-react";

export default function ItemHeader({title, href, isAllowedToEdit=false}) {
    return (
        <div className="flex flex-row justify-between items-center pb-6 pt-3">
            <div className={'pr-8'}>
                <h1>{title}</h1>
            </div>
            {(isAllowedToEdit) ? <Link className={'rounded-lg hover:bg-gray p-1'} href={href}>
                <Edit className="w-24 h-24"/>
            </Link>:""}
        </div>
    )
}
