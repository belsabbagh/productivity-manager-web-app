import CreateResource from "@/Components/CreateResource";
import React from "react";
import EmployeeIndexQuery from "@/Components/EmployeeIndexQuery";
import UserIndexQuery from "@/Components/UserIndexQuery";

export default function UserIndexContent({children, canCreate, resource, skills}) {
    return (
        <div className="rectangle bg-white items-center ml-20 mr-5 rounded-lg p-5">
            <div className='flex flex-row justify-between items-center'>
                <UserIndexQuery/>
                {canCreate ? <CreateResource resource={resource}/> : ""}
            </div>
            <div className={'mt-3 w-full'}>
                {children}
            </div>
        </div>

    )
}
