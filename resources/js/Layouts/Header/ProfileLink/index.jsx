import React from 'react';
import {Link} from '@inertiajs/inertia-react';
import {Logout} from '@mui/icons-material';

export default function ProfileLink({user}) {
  return (
    <div className={'flex flex-row justify-between ml-4'}>
      <div className={'flex flex-row pr-2 items-center'}>
        <div
          className={
            'pr-2 mr-2 mb-1 border-r-2 text-xl font-bold border-gray-100'
          }
        >
          welcome
        </div>
        <Link
          href={`/users/${user.id}`}
          className={'rounded-lg hover:bg-gray p-1'}
        >
          {user.name}
        </Link>
      </div>

      <Link
        href={route('logout')}
        className={'rounded-lg hover:bg-gray p-1'}
        as="button"
        method="post"
      >
        <Logout />
      </Link>
    </div>
  );
}
