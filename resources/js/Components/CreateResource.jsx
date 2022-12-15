import {Link} from "@inertiajs/inertia-react";
import React from "react";

export default function CreateResource({resource}){
    return (
        <div>
            <Link href={`/${resource}s/create`} className="text-white mr-4 pl-2 pr-2 rounded-lg bg-[#AFACD3] md:hover:text-purple-100 font-medium flex items-center justify-between w-full md:w-auto">+ Create {resource}</Link>
        </div>
    )
}
