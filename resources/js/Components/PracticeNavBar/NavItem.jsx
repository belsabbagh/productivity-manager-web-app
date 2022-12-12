import NavLink from "@/Components/PracticeNavBar/NavLink";

export default function NavItem({href, children}) {
    return (
        <div className={"p-1"}>
            <NavLink href={href}>
                {children}
            </NavLink>
        </div>
    )
}
