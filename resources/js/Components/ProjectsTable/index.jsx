import React from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Link} from "@inertiajs/inertia-react";

export default function ProjectsTable(props) {
    const data = props.data ?? []
    return (
        <TableContainer className="border-2 rounded" component={Paper} sx={{ minWidth: 800}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Leader</TableCell>
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
                                <TableCell align="center">{i.leader.name ?? 'None'}</TableCell>
                                <TableCell align="center" sx={{backgroundColor: ''}}><Link href={`/projects/${i.id}/edit`}>Edit</Link></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
