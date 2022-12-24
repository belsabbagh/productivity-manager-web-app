import React from "react";
import NumberInput from "@/Components/NumberInput";

export default function UtilizationInput({defaultValue = null}) {
    return (
        <NumberInput defaultValue={defaultValue} min={0} max={3} step={0.1}/>
    )
}
