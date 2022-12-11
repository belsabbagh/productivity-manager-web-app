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

export default function ResourceView({className, children, resource}) {
    return (
        <div className={className}>
            <ContentHeader className={"flex justify-between"} resource={resource}/>
            {children}
        </div>
    );
}
