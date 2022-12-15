import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, className, children }) {
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}
