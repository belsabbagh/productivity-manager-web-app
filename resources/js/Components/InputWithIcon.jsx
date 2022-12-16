import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import React from "react";

export default function InputWithIcon({textInputProps, data, errors, icon, title}) {
    return (
        <>
            <InputLabel forInput={textInputProps.name}>{title}</InputLabel>
            <div style={{display: "flex"}}>
                {icon}
                <TextInput
                    type={textInputProps.type}
                    name={textInputProps.name}
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete={textInputProps.autoComplete}
                    isFocused={textInputProps.isFocused}
                    handleChange={textInputProps.handleChange}
                />
            </div>
            <InputError message={errors.email} className="mt-2"/>
        </>
    )

}
