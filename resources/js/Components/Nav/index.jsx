import React from "react";
import NavItem from "@/Components/Nav/NavItem";
import HomeIcon from "@/Components/Icons/HomeIcon";
import ChartsIcon from "@/Components/Icons/ChartsIcon";
import ProjectsIcon from "@/Components/Icons/ProjectsIcon";
import UsersIcon from "@/Components/Icons/UsersIcon";

export default function Nav({className, svgClassName}) {
    return (
        <nav className={className}>
            <NavItem href={'/dashboard'}>
                <HomeIcon svgClassName={svgClassName}/>
            </NavItem>
            <NavItem href={'/charts'}>
                <ChartsIcon svgClassName={svgClassName}/>
            </NavItem>
            <NavItem href={'/projects'}>
                <ProjectsIcon svgClassName={svgClassName}/>
            </NavItem>
            <NavItem href={'/users'}>
                <UsersIcon svgClassName={svgClassName}/>
            </NavItem>
        </nav>
    )
}
