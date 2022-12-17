import CreateResource from "@/Components/CreateResource";
import React from "react";
import ProjectIndexQuery from "@/Components/ProjectIndexQuery";

export default function ProjectIndexContent({children, canCreate, resource, regions}) {
    return (
        <div className="rectangle bg-white items-center ml-20 mr-5 rounded-lg p-5">
            <div className='flex flex-row justify-between items-center'>
                <ProjectIndexQuery regions={regions}/>
                {canCreate ? <CreateResource resource={resource}/> : ""}
            </div>
            <div className={'mt-3 w-full'}>
                {children}
            </div>
        </div>

    )
}
