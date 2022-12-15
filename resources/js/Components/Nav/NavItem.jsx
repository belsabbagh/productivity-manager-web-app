import NavLink from "@/Components/Nav/NavLink";

export default function NavItem({href, children, active=false, className=""}) {
    return (
        <NavLink href={href} className={"p-1 hover:bg-gray rounded-lg " + className}>
            {children}
        </NavLink>
    )
}
