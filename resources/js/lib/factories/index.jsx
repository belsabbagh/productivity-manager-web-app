import React from "react";
import {TableCell} from "@mui/material";
import {formatColor, getUtilizationColor} from "@/lib";
import {Link} from "@inertiajs/inertia-react";

export function creatUserIndexTableRow(user) {
    return [
        <TableCell key={'name'} component="th" scope="row">{user.name}</TableCell>,
        <TableCell key={'email'} align="center">{user.email}</TableCell>,
        <TableCell key={'position'} align="center">{user.user_type.name}</TableCell>,
        <TableCell key={'show'} align="center">
            <Link className={'p-2 rounded-lg hover:bg-gray'} href={`/users/${user.id}`}>Show</Link>
        </TableCell>
    ]
}


export function createEmployeeIndexTableRow(employee) {
    const textColor = employee.total_utilization > 1 ? formatColor(255, 255, 255) : formatColor(0, 0, 0)
    return [
        <TableCell key={'email'} component="th" scope="row">{employee.email}</TableCell>,
        <TableCell
            key={'total_utilization'}
            align="center"
            style={{
                backgroundColor: getUtilizationColor(employee.total_utilization),
                color: textColor
            }}
        >
            {Number((employee.total_utilization).toFixed(2))}</TableCell>,
        <TableCell align="center" key={'show'}>
            <Link className={'p-2 rounded-lg hover:bg-gray'} href={`/employees/${employee.id}`}>Show</Link>
        </TableCell>,
    ]
}

export function createProjectIndexTableRow(project) {
    return [
        <TableCell key={'name'} component="th" scope="row">{project.name}</TableCell>,
        <TableCell key={'leader'} align="center">{project.leader.name ?? 'None'}</TableCell>,
        <TableCell key={'show'} align="center">
            <Link className={'p-2 rounded-lg hover:bg-gray'} href={`/projects/${project.id}`}>Show</Link>
        </TableCell>
    ]
}

export function createTeamIndexTableRow(team) {
    return [
        <TableCell key={'email'} component="th" scope="row">{team.email}</TableCell>,
        <TableCell key={'utilization'} align="center">{Number(team.pivot.utilization)}</TableCell>,
        <TableCell key={'edit'} align="center">
            <Link className={'p-2 rounded-lg hover:bg-gray'} href={`/teams/${team.id}/edit`}>Edit</Link>
        </TableCell>
    ]
}
