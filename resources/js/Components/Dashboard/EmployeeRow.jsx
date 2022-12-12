import {TableCell, TableRow} from "@mui/material";
import {ArrowForwardIos} from "@mui/icons-material";
import React from "react";
import {Link} from "@inertiajs/inertia-react";
import '../../../css/app.css'


export default function EmployeeRow({data}) {
    const resource = 'employees'

    function formatColor(r, g, b) {
        return `rgb(${r},${g},${b})`
    }

    function getUtilizationColor(val) {
        const r = (val <= 1) ? 255 * val : 255,
            g = (val <= 1) ? 255 : 100,
            b = 100
        return formatColor(r, g, b)
    }

    return (
        <TableRow
            className='rounded-lg p-4'
            style={{backgroundColor: getUtilizationColor(data.total_utilization)}}
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
