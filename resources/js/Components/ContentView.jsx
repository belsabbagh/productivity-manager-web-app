import ContentHeader from "@/Components/ContentHeader";
import React from "react";

export default function ContentView({className='', children, title}) {
    return (
        <div className={'bg-content flex flex-col text-xl font-bold justify-center p-6 my-3 mx-3 rounded-lg'+className}>
            <ContentHeader title={title}/>
                {children}
        </div>
    );
}
