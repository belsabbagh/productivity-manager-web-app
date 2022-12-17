import {List, ListItem} from "@mui/material";
import AttributeDisplay from "@/Components/AttributeDisplay";
import React from "react";
import {Link} from "@inertiajs/inertia-react";
import {ArrowForwardIos} from "@mui/icons-material";

export default function LeaderDisplay({data, label, itemValueKey, itemId = 'id', className}) {
    console.log(data[itemValueKey])
    return (
        <AttributeDisplay
            label={label}
            className={className}
        >
            <div className="bg-textbox p-2 rounded justify-items-center">
                <Link className={'flex flex-row justify-between'} href={'/users/' + data[itemId]}>
                    <div className="">
                        {data[itemValueKey]}
                    </div>
                    <div className={'ml-auto'}>
                        <ArrowForwardIos sx={{color: 'black'}}/>
                    </div>
                </Link>
            </div>

        </AttributeDisplay>
    )
}
