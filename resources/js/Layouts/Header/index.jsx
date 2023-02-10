import {Link} from '@inertiajs/inertia-react';
import ApplicationLogo from '@/Components/Icons/ApplicationLogo';
import React from 'react';
import ProfileLink from '@/Layouts/Header/ProfileLink';
import BackIcon from '@/Components/Icons/BackIcon';

export default function Header({title, user = null, backHref}) {
  return (
    <header className="max-h-fit bg-background flex flex-row justify-between items-center">
      <Link href="/">
        <ApplicationLogo className="w-24 h-24 hover:shadow-sm rounded-lg" />
      </Link>
      <div className="px-6 border-b-2 border-black flex flex-row items-center justify-between">
        <div className={'text-4xl font-bold'}>{title}</div>
        {user !== null ? <ProfileLink user={user} /> : null}
      </div>
      <Link
        className={
          'hover:bg-gray py-2 px-4 mr-6 justify-center items-center font-bold rounded-lg'
        }
        href={backHref}
      >
        <BackIcon />
      </Link>
    </header>
  );
}
