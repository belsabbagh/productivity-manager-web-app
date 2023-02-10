import React from 'react';
import {Link} from '@inertiajs/inertia-react';

export default function NavLink({href, className, children, title = ''}) {
  return (
    <Link title={title} href={href} className={className}>
      {children}
    </Link>
  );
}
