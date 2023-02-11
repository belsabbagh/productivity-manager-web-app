import {TableCell, TableRow} from '@mui/material';
import React from 'react';
import SeeMoreButton from '@/Components/Dashboard/SeeMoreButton';
import {formatColor, getUtilizationColor} from '@/lib';
const MAX_COL = 255;
export default function EmployeeRow({data: employee}) {
  const resource = 'employees';
  return (
    <TableRow
      className="rounded-lg p-4"
      style={{
        backgroundColor: getUtilizationColor(employee.total_utilization),
        color:
          employee.total_utilization > 1
            ? formatColor(MAX_COL, MAX_COL, MAX_COL)
            : formatColor(0, 0, 0),
      }}
      key={employee.id}
    >
      <TableCell
        component="th"
        scope="row"
      >{`${employee.first_name} ${employee.last_name}`}</TableCell>
      <TableCell align="right">{Number(employee.total_utilization).toFixed(1)}</TableCell>
      <TableCell align="right">
        <SeeMoreButton href={`/${resource}/${employee.id}`} />
      </TableCell>
    </TableRow>
  );
}
