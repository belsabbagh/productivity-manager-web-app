import React from 'react';
import '../../../css/app.css'
import {
    Paper,
    Table,
    TableBody,
    TableContainer,
    Typography
} from "@mui/material";
import {ListAlt} from "@mui/icons-material";
import {Link} from "@inertiajs/inertia-react";
import DashboardViewHeader from "@/Components/Dashboard/DashboardViewHeader";

export default function DashboardList({className, children, resource}) {
    return (
        <div className={className}>
            <DashboardViewHeader className={"flex justify-between"} resource={resource}/>
            <TableContainer component={Paper} sx={{maxHeight: 150}}>
                <Table sx={{height: 'max-content'}} size="small" aria-label="a dense table">
                    <TableBody>
                        {children}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
