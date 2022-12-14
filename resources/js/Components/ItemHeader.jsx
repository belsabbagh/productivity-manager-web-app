import {KeyboardOptionKey} from "@mui/icons-material";
import React from "react";

export default function ItemHeader({title}){
    return(
        <div className="flex flex-row justify-between items-center pb-6 pt-3">
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <KeyboardOptionKey className="w-24 h-24"/>
            </div>
        </div>
    )
}
