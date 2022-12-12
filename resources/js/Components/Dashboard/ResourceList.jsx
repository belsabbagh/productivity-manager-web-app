import {Paper, Table, TableBody, TableContainer} from "@mui/material";
import React from "react";

export default function ResourceList({children, maxHeight = 150}) {
    return (
        <TableContainer component={Paper} sx={{maxHeight: maxHeight}}>
            <Table sx={{height: 'max-content'}} size="small" aria-label="a dense table">
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
