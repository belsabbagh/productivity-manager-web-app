import React from 'react';
import '../../css/app.css'
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableContainer,
    Typography
} from "@mui/material";
import {ListAlt} from "@mui/icons-material";

export default function DashboardList({title, children}) {
    return (
        <div className="bg-content p-6 rounded-lg">
            <div className='flex'>
                <Typography className='px-auto' variant='h6'>
                    {title}
                </Typography>
                <IconButton color="black" component="label">
                    <ListAlt/>
                </IconButton>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TableBody>
                        {children}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
