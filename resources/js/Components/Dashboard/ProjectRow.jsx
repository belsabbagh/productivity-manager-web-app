import {TableCell, TableRow} from "@mui/material";
import {Link} from "@inertiajs/inertia-react";
import {ArrowForwardIos} from "@mui/icons-material";
import React from "react";

export default function ProjectRow({data}) {
    const resource = "projects"
    return (
        <TableRow
            className='rounded-lg p-4'
            style={{backgroundColor: 'rgb(233,231,253)'}}
            key={data.id}
        >
            <TableCell component="th" scope="row">{data.name}</TableCell>
            <TableCell align="right">{data.utilization}</TableCell>
            <TableCell align="right">
                <Link href={`/${resource}/${data.id}`}>
                    <ArrowForwardIos color="action" className="shadow-md rounded-full"/>
                </Link>
            </TableCell>
        </TableRow>
    );
}
