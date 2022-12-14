import NavLink from "@/Components/Nav/NavLink";

export default function NavItem({href, children}) {
    return (
        <div className={"p-1"}>
            <NavLink href={href}>
                {children}
            </NavLink>
        </div>
    )
}
