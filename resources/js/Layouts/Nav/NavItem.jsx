import NavLink from '@/Layouts/Nav/NavLink';

export default function NavItem({
  href,
  children,
  active = false,
  title = '',
  className = '',
}) {
  return (
    <NavLink
      title={title}
      href={href}
      className={'p-1 hover:bg-gray rounded-lg ' + className}
    >
      {children}
    </NavLink>
  );
}
