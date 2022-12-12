import {Typography} from "@mui/material";
import {Link} from "@inertiajs/inertia-react";
import {ListAltOutlined} from "@mui/icons-material";
import React from "react";

export default function ContentHeader({resource, className}) {
    return (
        <div className={className}>
            <Typography className='px-auto' variant='h6'>
                {resource}
            </Typography>
            <Link href={`/${resource}`}>
                <ListAltOutlined  sx={{color: 'black'}}/>
            </Link>
        </div>
    );
}
