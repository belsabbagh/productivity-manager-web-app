import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Table from '@mui/material/Table';
import { Link, Head } from '@inertiajs/inertia-react';

export default function index(props) {
    const { employees } = props
    return (
        <>
            <Head>
                <title>employees index</title>
            </Head>
            <body>
                <div className="container mx-auto bg-[#EAF0FF] p-10 h-[100vh]">

                    <div className=" flex ">

                        <div className="dashboard bg-red-100 w-[20%] h-[500px] p-5">
                            <div className="mb-40"><p>logo</p></div>
                            <h1>dashboard</h1>
                        </div>
                        <div>
                            <div className="navigationBar p-5 flex justify-between items-centre w-[1000px] bg-yellow-200">
                                <div className="title"></div>
                                <div> <div class="border-solid border-b-2 border-sky-500 font-bold">Employee</div> </div>
                                <div>
                                    <div class="inline-flex">
                                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                            Prev
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="rectangle bg-white mt-10 ml-20 mr-5 w-[90%] h-[380px] radius-[5px] rounded-[10px] p-5">
                                <div className="search w-[40%]">
                                    <form class="flex items-center">
                                        <label for="simple-search" class="sr-only">Search</label>
                                        <div class="relative w-full">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                            </div>
                                            <input type="text" id="simple-search" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-purple-200 dark:focus:border-purple-200" placeholder="Search" required>
                                            </input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </>
    );
}
