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
import ContentHeader from "@/Components/Dashboard/ContentHeader";

export default function ResourceList({className, children, resource}) {
    return (
        <div className={className}>
            <ContentHeader className={"flex justify-between"} resource={resource}/>
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
