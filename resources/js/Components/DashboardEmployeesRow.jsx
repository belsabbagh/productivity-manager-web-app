import {TableCell, TableRow} from "@mui/material";
import {ArrowForwardIos} from "@mui/icons-material";
import React from "react";
import {Link} from "@inertiajs/inertia-react";
import '../../css/app.css'


export default function DashboardEmployeesRow({resource, data}) {
    function getUtilizationColor(val) {
        const b = 125
        if (val <= 1) {
            const g = 255
            const r = g * val
            return `rgb(${r},${g},${b})`
        }
        return `rgb(${255},${100},${100})`
    }
    const row = {...data, color: getUtilizationColor(data.utilization)}
    return (
        <TableRow
            className='rounded-lg p-4'
            style={{backgroundColor: row.color}}
            key={data.id}
        >
            <TableCell component="th" scope="row">{row.name}</TableCell>
            <TableCell align="right">{data.utilization}</TableCell>
            <TableCell align="right">
                <Link href={"/"+resource}>
                    <ArrowForwardIos color="action" className="shadow-md rounded-full"/>
                </Link>
            </TableCell>
        </TableRow>
    );
}
