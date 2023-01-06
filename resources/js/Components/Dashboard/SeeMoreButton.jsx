import React from 'react';
import {ArrowForwardIos} from '@mui/icons-material';
import {Link} from '@inertiajs/inertia-react';
export default function SeeMoreButton({href}) {
  return (
    <Link href={href}>
      {' '}
      <ArrowForwardIos color="action" className="shadow-md rounded-full" />
    </Link>
  );
}
