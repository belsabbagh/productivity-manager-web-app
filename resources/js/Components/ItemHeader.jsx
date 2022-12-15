import {Edit} from "@mui/icons-material";
import React from "react";
import {Link} from "@inertiajs/inertia-react";

export default function ItemHeader({title, href}){
    return(
        <div className="flex flex-row justify-between items-center pb-6 pt-3">
            <div>
                <h1>{title}</h1>
            </div>
            <Link href={href}>
                <Edit className="w-24 h-24"/>
            </Link>
        </div>
    )
}
