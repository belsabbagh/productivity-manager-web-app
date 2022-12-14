import React from "react";
import AttributeDisplay from "@/Components/AttributeDisplay";

export default function TextDisplay({className='', label, value}) {
    return(
        <AttributeDisplay
            label={label}
            className={className}
        >
            <div className="bg-textbox p-2 rounded justify-items-center">
                {value}
            </div>
        </AttributeDisplay>
    )
}
