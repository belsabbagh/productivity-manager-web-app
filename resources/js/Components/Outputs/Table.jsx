import {
  Paper,
  TableBody,
  TableCell,
  Table as MuiTable,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

function createTableRows(data, getRowCells) {
  const rowSx = {'&:last-child td, &:last-child th': {border: 0}};
  return data.map((i) => (
    <TableRow key={i.id} sx={rowSx}>
      {getRowCells(i)}
    </TableRow>
  ));
}

export default function Table({headers, data, getRowCells}) {
  return (
    <TableContainer
      className="border-2 rounded"
      component={Paper}
      sx={{minWidth: 800}}
    >
      <MuiTable>
        <TableHead>
          <TableRow>
            {headers.map((i) => (
              <TableCell key={i} align={'center'}>
                {i}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{createTableRows(data, getRowCells)}</TableBody>
      </MuiTable>
    </TableContainer>
  );
}
