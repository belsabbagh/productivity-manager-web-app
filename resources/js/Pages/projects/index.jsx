import React from 'react';
import {Link, Head} from '@inertiajs/inertia-react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProjectsTable from "@/Components/ProjectsTable";
import {isAdmin} from "@/lib";
import CreateResource from "@/Components/CreateResource";

export default function index(props) {
    const projects = props.projects.data
    const userType = props.auth.user.user_type_id
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            title={"Projects"}
            backHref={'/dashboard'}
        >
            {/* Body Start*/}
            <div className="rectangle bg-white items-center ml-20 mr-5 rounded-[10px] p-5">
                <div className=' w-[100%] flex justify-between items-center'>
                    <div className="search w-[40%]">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <form>
                                <input type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-purple-200 dark:focus:border-purple-200" placeholder="Search">
                                </input>
                            </form>
                        </div>
                    </div>
                    {isAdmin(userType) ? <CreateResource resource={'project'}/> : ""}

                </div>
                {/* ProjectsTable */}
                <div className={'mt-3 w-full'}>
                    <ProjectsTable
                        data={projects}
                        firstColKey={'name'}
                    />
                </div>
            </div>
            {/* Body End */}
        </AuthenticatedLayout>
    );
}
