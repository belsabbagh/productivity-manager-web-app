import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/PracticeNavBar/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import '../../css/app.css';
import Header from "@/Components/Header";
import Nav from "@/Components/Nav";

export default function AuthenticatedLayout({ auth, title, children }) {
    return (
        <div className={"whole-page"}>
            <div className="min-h-screen bg-background flex flex-col">
                <Header className={'py-2 pl-2'} user={auth.user} title={title}/>
                <div id={'nav-and-content'} className={'flex flex-row justify-between'}>
                    <Nav/>
                    <main>{children}</main>
                    <div></div>
                </div>
            </div>
        </div>

    );
}
