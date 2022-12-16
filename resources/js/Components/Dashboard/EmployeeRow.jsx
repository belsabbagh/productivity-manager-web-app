import {TableCell, TableRow} from "@mui/material";
import {ArrowForwardIos} from "@mui/icons-material";
import React from "react";
import {Link} from "@inertiajs/inertia-react";
import '../../../css/app.css'
import {formatColor, getUtilizationColor} from '@/lib'

export default function EmployeeRow({data}) {
    const resource = 'employees'
    const textColor = data.total_utilization > 1 ? formatColor(255,255,255) : formatColor(0,0,0)

    return (
        <TableRow
            className='rounded-lg p-4'
            style={{backgroundColor: getUtilizationColor(data.total_utilization), color: textColor}}
            key={data.id}
        >
            <TableCell component="th" scope="row">{`${data.first_name} ${data.last_name}`}</TableCell>
            <TableCell align="right">{data.total_utilization}</TableCell>
            <TableCell align="right">
                <Link href={`/${resource}/${data.id}`}>
                    <ArrowForwardIos color="action" className="shadow-md rounded-full"/>
                </Link>
            </TableCell>
        </TableRow>
    );
}
