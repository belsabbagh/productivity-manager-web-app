import CreateResource from "@/Components/CreateResource";
import React from "react";
import EmployeeIndexQuery from "@/Components/EmployeeIndexQuery";

export default function EmployeeIndexContent({children, canCreate, resource, skills}) {
    return (
        <div className="rectangle bg-white items-center rounded-lg p-5">
            <div className='flex flex-row justify-between items-center'>
                <EmployeeIndexQuery skills={skills}/>
                {canCreate ? <CreateResource resource={resource}/> : ""}
            </div>
            <div className={'mt-3 w-full'}>
                {children}
            </div>
        </div>
    )
}
