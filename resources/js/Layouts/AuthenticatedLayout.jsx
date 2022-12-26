import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import '../../css/app.css';
import Header from '@/Layouts/Header';
import Nav from "@/Layouts/Nav";

export default function AuthenticatedLayout({ auth, title, children, backHref}) {
    return (
        <div className="min-h-screen bg-background pt-2 flex flex-col">
            <Head><title>{title}</title></Head>
            <Header className={'py-2 pl-2'} user={auth.user} title={title} backHref={backHref} />
            <div id={'nav-and-content'} className={'flex flex-row items-start justify-start'}>
                <Nav className={'flex flex-col mt-24 ml-6 mr-auto'} svgClassName={"h-12 w-12 text-black"} />
                <main className={'pt-4 flex flex-col justify-center items-center'}>
                    {children}
                </main>
                <Nav className={'opacity-0 flex flex-col mr-6 ml-auto mt-2'} svgClassName={"h-8 w-8 text-black"} />
            </div>
        </div>
    );
}
