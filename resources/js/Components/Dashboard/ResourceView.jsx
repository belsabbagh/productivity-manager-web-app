import React from 'react';
import '../../../css/app.css'
import ContentView from "@/Components/ContentView";
import ContentHeader from "@/Components/ContentHeader";
import ResourceHeader from "@/Components/Dashboard/ResourceHeader";

export default function ResourceView({children, resource}) {
    return (
        <div className={'bg-content flex flex-col justify-center p-6 my-3 mx-3 rounded-lg'}>
            <ResourceHeader resource={resource}/>
            {children}
        </div>
    );
}
