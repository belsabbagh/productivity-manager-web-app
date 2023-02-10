import {Edit} from '@mui/icons-material';
import React from 'react';
import {Link} from '@inertiajs/inertia-react';

export default function ItemHeader({title, linkIcon, href = null}) {
  return (
    <div className="flex flex-row justify-between items-center pb-6 pt-3">
      <div className={'pr-8'}>
        <h1>{title}</h1>
      </div>
      {href !== null ? (
        <Link className={'rounded-lg hover:bg-gray p-1'} href={href}>
          {linkIcon}
        </Link>
      ) : null}
    </div>
  );
}
