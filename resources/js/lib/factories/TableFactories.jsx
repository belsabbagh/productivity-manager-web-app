import {formatColor, getUtilizationColor} from '@/lib';
import {TableCell} from '@mui/material';
import {Link} from '@inertiajs/inertia-react';
import React from 'react';

export function UserIndexTableRow(user) {
  const color = (user.user_type.id === 2) ? getUtilizationColor(user.total_utilization) : formatColor(255, 255, 255);
  return [
    <TableCell key={'name'} component="th" scope="row" style={{backgroundColor: color}}>
      {user.name}
    </TableCell>,
    <TableCell key={'email'} align="center">
      {user.email}
    </TableCell>,
    <TableCell key={'position'} align="center">
      {user.user_type.name}
    </TableCell>,
    <TableCell key={'show'} align="center">
      <Link
        className={'p-2 rounded-lg hover:bg-gray'}
        href={`/users/${user.id}`}
      >
        Show
      </Link>
    </TableCell>,
  ];
}

export function EmployeeIndexTableRowCells(employee) {
  const utilizationStyle = {
    backgroundColor: getUtilizationColor(employee.total_utilization),
    color:
      employee.total_utilization > 1
        ? formatColor(255, 255, 255)
        : formatColor(0, 0, 0),
  };
  const formattedUtilization = Number(employee.total_utilization).toFixed(1);
  return [
    <TableCell key={'email'} component="th" scope="row">
      {employee.email}
    </TableCell>,
    <TableCell
      key={'total_utilization'}
      align="center"
      style={utilizationStyle}
    >
      {formattedUtilization}
    </TableCell>,
    <TableCell align="center" key={'show'}>
      <Link
        className={'p-2 rounded-lg hover:bg-gray'}
        href={`/employees/${employee.id}`}
      >
        Show
      </Link>
    </TableCell>,
  ];
}

export function ProjectIndexTableRowCells(project) {
  return [
    <TableCell key={'name'} component="th" scope="row">
      {project.name}
    </TableCell>,
    <TableCell key={'leader'} align="center">
      {project.leader.name ?? 'None'}
    </TableCell>,
    <TableCell key={'show'} align="center">
      <Link
        className={'p-2 rounded-lg hover:bg-gray'}
        href={`/projects/${project.id}`}
      >
        Show
      </Link>
    </TableCell>,
  ];
}

export function TeamIndexTableRowCells(team) {
  return [
    <TableCell key={'email'} component="th" scope="row">
      {team.email}
    </TableCell>,
    <TableCell key={'utilization'} align="center">
      {Number(team.pivot.utilization)}
    </TableCell>,
    <TableCell key={'edit'} align="center">
      <Link
        className={'p-2 rounded-lg hover:bg-gray'}
        href={`/projects/${team.pivot.project_id}/team/${team.pivot.id}/edit`}
      >
        Edit
      </Link>
    </TableCell>,
  ];
}

export function SkillIndexTableRowCells(skill) {
  return [
    <TableCell key={'name'} align="center">
      {skill.name}
    </TableCell>,
    <TableCell key={'show'} align="center">
      <Link
        className={'p-2 rounded-lg hover:bg-gray'}
        href={`/skills/${skill.id}`}
      >
        Show
      </Link>
    </TableCell>,
  ];
}
