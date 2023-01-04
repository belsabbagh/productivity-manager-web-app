import {Paper, Table, TableBody, TableContainer} from '@mui/material';
import React from 'react';
const MAX_HEIGHT = 150;
export default function ResourceList({children, maxHeight = MAX_HEIGHT}) {
  return (
    <TableContainer component={Paper} sx={{maxHeight}}>
      <Table
        sx={{height: 'max-content'}}
        size="small"
        aria-label="a dense table"
      >
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
