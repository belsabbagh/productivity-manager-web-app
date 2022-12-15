import React from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Link} from "@inertiajs/inertia-react";

export default function UsersTable(props) {
    const data = props.data ?? []
    return (
        <TableContainer className="border-2 rounded" component={Paper} sx={{minWidth: 800}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Position</TableCell>
                        <TableCell align="center">Details</TableCell>
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
                                <TableCell align="center">{i.email}</TableCell>
                                <TableCell align="center">{i.user_type.name}</TableCell>
                                <TableCell align="center"><Link className={'p-2 rounded-lg hover:bg-gray'} href={`/projects/${i.id}`}>Show</Link></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
