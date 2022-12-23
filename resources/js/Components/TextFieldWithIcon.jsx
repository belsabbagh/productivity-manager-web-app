import {TextField} from "@mui/material";
import React from "react";
import InputWithIcon from "@/Components/InputWithIcon";

export default function TextFieldWithIcon({name, label, onChange, icon}) {
    const input = <TextField
        name={name}
        sx={{minWidth: 1}}
        className="bg-content"
        required
        label={label}
        variant="outlined"
        onChange={onChange}
    />
    return <InputWithIcon icon={icon} input={input}/>
}
