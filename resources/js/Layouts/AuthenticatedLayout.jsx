import React from 'react';
import {Head} from '@inertiajs/inertia-react';
import Header from '@/Layouts/Header';
import Nav from '@/Layouts/Nav';

export default function AuthenticatedLayout({auth, title, children, backHref}) {
  return (
    <div className="min-h-screen bg-background pt-2 flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <Header
        className={'py-2 pl-2'}
        user={auth.user}
        title={title}
        backHref={backHref}
      />
      <div
        id={'nav-and-content'}
        className={'flex flex-row items-start justify-between'}
      >
        <Nav
          className={'flex flex-col mt-24 ml-6 mr-3'}
          svgClassName={'h-12 w-12 text-black'}
        />
        <main className={'pt-4 flex flex-col justify-center items-center'}>
          {children}
        </main>
        <Nav
          className={'flex flex-col mt-24 ml-6 mr-3 opacity-0'}
          svgClassName={'h-12 w-12 text-black'}
        />
      </div>
    </div>
  );
}
