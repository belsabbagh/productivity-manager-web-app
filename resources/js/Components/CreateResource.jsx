import {Link} from "@inertiajs/inertia-react";
import React from "react";

export default function CreateResource({resource, href, label=null}){
    label = (label===null)?`Create ${resource}`:label
    href = (href===null)?`/${resource}s/create`:href
    return (
        <div>
            <Link href={href} className="text-white mr-4 pl-2 pr-2 rounded-lg bg-[#AFACD3] md:hover:text-purple-100 font-medium flex items-center justify-between w-full md:w-auto">+ {" "+ label}</Link>
        </div>
    )
}
