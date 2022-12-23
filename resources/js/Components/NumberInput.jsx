import {Input} from "@mui/material";
import React from "react";

export default function NumberInput({min, max, step, defaultValue = null}) {
    return (
        <Input
            type="number"
            inputProps={{min: min, max: max, step: step}}
            defaultValue={defaultValue} sx={{minWidth: 1, pl: 1}} className="bg-content border border-gray rounded"
            label="project capacity" variant="outlined"
        />
    )
}
