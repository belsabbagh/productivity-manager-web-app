import React from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Link} from "@inertiajs/inertia-react";

export default function TeamTable(props) {
    const data = props.data ?? []
    const isAdmin = props.isAdmin
    console.log(data)
    return (
        <TableContainer className="border-2 rounded" component={Paper} sx={{minWidth: 800}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="center">Utilization</TableCell>
                        <TableCell align="center">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((i) => {
                        return (
                            <TableRow
                                key={i.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">{i[props.firstColKey]}</TableCell>
                                <TableCell align="center">
                                    {Number(i.pivot.utilization)}</TableCell>
                                <TableCell align="center"><Link className={'p-2 rounded-lg hover:bg-gray'} href={`/teams/${i.id}/edit`}>Edit</Link></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
