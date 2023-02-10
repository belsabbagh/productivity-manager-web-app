import {Link} from '@inertiajs/inertia-react';

export default function PersonnelNav({active}) {
  const linkStyle = (active) =>
    `flex flex-row justify-center px-20 py-2 rounded-lg ${
      active ? 'bg-content border border-gray' : 'bg-white'
    }`;
  return (
    <div className={'flex flex-row w-full justify-between items-center mb-2'}>
      <Link href={'/users'} className={linkStyle(active === 'users')}>
        Users
      </Link>
      <Link href={'/employees'} className={linkStyle(active === 'employees')}>
        Employees
      </Link>
    </div>
  );
}
