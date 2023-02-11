import React from 'react';
import {TableCell, TableRow} from '@mui/material';
import SeeMoreButton from '@/Components/Dashboard/SeeMoreButton';

export default function ProjectRow({data}) {
  const resource = 'projects';
  return (
    <TableRow
      className="rounded-lg p-4"
      style={{backgroundColor: 'rgb(233,231,253)'}}
      key={data.id}
    >
      <TableCell component="th" scope="row">
        {data.name}
      </TableCell>
      <TableCell align="right">
        <SeeMoreButton href={`/${resource}/${data.id}`} />
      </TableCell>
    </TableRow>
  );
}
