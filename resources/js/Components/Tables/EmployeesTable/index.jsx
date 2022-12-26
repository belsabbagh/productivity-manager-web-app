import React from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Link} from "@inertiajs/inertia-react";
import {formatColor, getUtilizationColor} from "@/lib";

export default function EmployeesTable(props) {
    const data = props.data ?? []
    const isAdmin = props.isAdmin
    const textColor = data.total_utilization > 1 ? formatColor(255, 255, 255) : formatColor(0, 0, 0)
    return (
        <TableContainer className="border-2 rounded" component={Paper} sx={{minWidth: 800}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="center">Utilization</TableCell>
                        <TableCell align="center">Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((i) => {
                        const textColor = i.total_utilization > 1 ? formatColor(255, 255, 255) : formatColor(0, 0, 0)
                        return (
                            <TableRow
                                key={i.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">{i[props.firstColKey]}</TableCell>
                                <TableCell
                                    align="center"
                                    style={{
                                        backgroundColor: getUtilizationColor(i.total_utilization),
                                        color: textColor
                                    }}
                                >
                                    {Number((i.total_utilization).toFixed(2))}</TableCell>
                                <TableCell align="center"><Link className={'p-2 rounded-lg hover:bg-gray'} href={`/employees/${i.id}`}>Show</Link></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
