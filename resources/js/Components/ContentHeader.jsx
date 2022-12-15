import {Typography} from "@mui/material";
import {Link} from "@inertiajs/inertia-react";
import {ListAltOutlined} from "@mui/icons-material";
import React from "react";

export default function ContentHeader({title, href}) {
    return (
        <div className={"flex flex-row justify-between pb-1"}>
            <div className={'text-xl font-bold'}>
                {title}
            </div>
            <Link href={href} className={'rounded-lg hover:bg-gray p-1'}>
                <ListAltOutlined sx={{color: 'black'}}/>
            </Link>
        </div>
    );
}
