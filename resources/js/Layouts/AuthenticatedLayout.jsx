import React, { useState } from 'react';
import ApplicationLogo from '@/Components/Icons/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/Nav/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import '../../css/app.css';
import Header from "@/Components/Header";
import Nav from "@/Components/Nav";

export default function AuthenticatedLayout({ auth, title, children }) {
    return (
        <div className={"whole-page"}>
            <div className="min-h-screen bg-background pt-2 flex flex-col">
                <Header className={'py-2 pl-2'} user={auth.user} title={title}/>
                <div id={'nav-and-content'} className={'flex flex-row items-center justify-between'}>
                    <Nav className={'flex flex-col mt-2 ml-6'} svgClassName={"h-12 w-12 text-black"}/>
                    <main className={'pt-4 flex justify-center items-center'}>
                        {children}
                    </main>
                    <Nav className={'opacity-0 flex flex-col mt-2'} svgClassName={"h-8 w-8 text-black"}/>
                </div>
            </div>
        </div>
    );
}
