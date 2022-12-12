import {Typography} from "@mui/material";
import {Link} from "@inertiajs/inertia-react";
import {ListAltOutlined} from "@mui/icons-material";
import React from "react";

export default function ContentHeader({title, href}) {
    return (
        <div className={"flex flex-row justify-between"}>
            <Typography className='px-auto' variant='h6'>
                {title}
            </Typography>
            <Link href={href}>
                <ListAltOutlined  sx={{color: 'black'}}/>
            </Link>
        </div>
    );
}
