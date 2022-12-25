import CreateResource from "@/Components/CreateResource";
import React from "react";
import UserIndexQuery from "@/Components/UserIndexQuery";
import PersonnelNav from "@/Components/PersonnelNav";

export default function UserIndexContent({children, canCreate, resource}) {
    return (
        <div className="rectangle bg-white items-center rounded-lg p-5">
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
