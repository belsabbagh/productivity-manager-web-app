import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Head} from '@inertiajs/inertia-react';
import ApplicationLogo from '@/Components/Icons/ApplicationLogo';

export default function index(props) {
    const {employees} = props
    return (
        <>
            <Head>
                <title>employees index</title>
            </Head>

            <div className="container mx-auto bg-[#EAF0FF] p-10 h-[100vh] ">
                {/* Dashboard Start*/}
                <div className="DashboardBar px-5 pb-0 flex justify-between items-center">
                    <div><ApplicationLogo className="w-24 h-24"/></div>
                    <div className="ml-20 title border-solid border-b-2 border-black w-[60%] p-1 flex justify-between items-center">
                        <div className="text-4xl font-bold">Employees</div>
                        <div className=" w-[25%] flex justify-between items-center">
                            <div className="text-xl font-bold"> welcome</div>
                            <div className="text-yellow-600"> |</div>
                            <div className="flex items-start"> name</div>
                        </div>
                    </div>
                    <div>
                        <div className="inline-flex">
                            <button className="hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-l">
                                <svg className="h-8 w-8 text-purple-900" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Dashboard End*/}
                {/* Navigation Start*/}
                <div className="flex">
                    <div className="navigation w-[10%] h-[100%] p-5">
                        <div className="mt-[40px]">
                            <div className="hidden w-full md:block md:w-auto items-center" id="navbar-default">
                                <ul className="flex flex-col p-2 mt-2 ">
                                    <li>
                                        <a href="#" className="block p-2 dark:hover:bg-gray-300" aria-current="page">
                                            <svg className="h-9 w-9 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block p-2 dark:hover:bg-gray-300" aria-current="page">
                                            <svg className="h-9 w-9 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"/>
                                                <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"/>
                                                <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block p-2 dark:hover:bg-gray-300" aria-current="page">
                                            <svg className="h-9 w-9 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block p-2 dark:hover:bg-gray-300" aria-current="page">
                                            <svg className="h-9 w-9 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Navigation End*/}
                    {/* Body Start*/}
                    <div className="rectangle bg-white ml-20 mr-5 w-[100%] h-[390px] rounded-[10px] p-5">
                        <form className="items-center">
                            <div className=' w-[100%] flex justify-between items-center'>
                                <div className="search w-[40%]">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-purple-200 dark:focus:border-purple-200" placeholder="Search">
                                        </input>
                                    </div>
                                </div>
                                <div>
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-white mr-4 pl-2 pr-2 rounded-lg bg-[#AFACD3] md:hover:text-purple-100 font-medium flex items-center justify-between w-full md:w-auto">+ Add Filter</button>
                                    <div id="dropdownNavbar" className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                                        <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Table */}
                            <div className='w-[100%] items-End pt-3'>
                                <div className="overflow-x-auto shadow-md sm:rounded-lg border-2 border-purple-300 h-[300px] ">
                                    <table className="w-full text-sm text-left">
                                        <thead className="text-xs text-gray-400 uppercase bg-gray-200 ">
                                        <tr>
                                            <th scope="col" className="py-3 px-6">
                                                Name
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Utilization
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                projects
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                <span className="sr-only">Details</span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="bg-white border-b ">
                                            <th scope="row" className="py-4 px-6 font-medium text-black">
                                                Mariam Maged
                                            </th>
                                            <td className="py-4 px-6 underline text-blue-500">
                                                1
                                            </td>
                                            <td className="py-4 px-6 text-black">
                                                Laptop
                                            </td>
                                            <td className="py-4 px-6 text-right ">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Details</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Body End */}
            </div>
        </>
    );
}
