import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import TextDisplay from "@/Components/TextDisplay";
import AttributeDisplay from "@/Components/AttributeDisplay";
import ItemHeader from "@/Components/ItemHeader";
import {Button} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LeaderDisplay from "@/Components/LeaderDisplay";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function show(props) {
    let {project} = props
    project = project.data
    console.log(project)
    return (
        <>
            <Head>
                <title>projects show</title>
            </Head>
            <div className="bg-white p-6 flex flex-col">
                <ItemHeader
                    title={project.name+" Details"}
                    href={`/projects/${project.id}/edit`}
                />
                <div className="flex-col justify-center bg-content rounded-lg px-8 py-4">
                    <TextDisplay
                        label={"Name"}
                        value={project.name}
                        className="mb-5"
                    />
                    <TextDisplay
                        label={"Region"}
                        value={project.region}
                        className=" mb-5"
                    />
                    <LeaderDisplay
                        label={"Leader"}
                        data={project.leader}
                        ItemValueKey={'name'}
                    />
                    {/*<ListDisplay*/}
                    {/*    label={"Team"}*/}
                    {/*    data={project.team}*/}
                    {/*    itemValueKey={'email'}*/}
                    {/*    className="w-full mb-5 rounded-lg"*/}
                    {/*/>*/}
                    <AttributeDisplay
                        label={"Team"}
                    />
                    <TableContainer component={Paper}>
                        <Table className="w-48 flex flex-col border-2 rounded" sx={{ minWidth: 20 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Employee</TableCell>
                                    <TableCell align="center">Utilization</TableCell>
                                    <TableCell align="center">Edit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={project.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {project.id}
                                        </TableCell>
                                        <TableCell align="center">{row.calories}</TableCell>
                                        <TableCell align="center"><Button>Edit {project.lead}</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    );
}
