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
import {Link} from "@inertiajs/inertia-react";

export default function DashboardList({ className, children, resource}) {
    return (
        <div className={className}>
            <div className='flex'>
                <Typography className='px-auto' variant='h6'>
                    {resource}
                </Typography>
                <IconButton color="black" component="label">
                    <ListAlt/>
                </IconButton>
            </div>

            <TableContainer component={Paper} sx={{maxHeight: 150}}>
                <Table sx={{height: 'max-content' }} size="small" aria-label="a dense table">
                    <TableBody>
                        {children}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link href={`/${resource}`}>See all</Link>
        </div>
    );
}
