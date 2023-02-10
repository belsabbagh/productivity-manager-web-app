import React from 'react';
import NavItem from '@/Layouts/Nav/NavItem';
import HomeIcon from '@/Components/Icons/HomeIcon';
import ChartsIcon from '@/Components/Icons/ChartsIcon';
import ProjectsIcon from '@/Components/Icons/ProjectsIcon';
import UsersIcon from '@/Components/Icons/UsersIcon';

export default function Nav({className, svgClassName}) {
  return (
    <nav className={className}>
      <NavItem href={'/dashboard'} title={'Dashboard'}>
        <HomeIcon svgClassName={svgClassName} />
      </NavItem>
      <NavItem href={'/charts'} title={'Charts'}>
        <ChartsIcon svgClassName={svgClassName} />
      </NavItem>
      <NavItem href={'/projects'} title={'Projects'}>
        <ProjectsIcon svgClassName={svgClassName} />
      </NavItem>
      <NavItem href={'/users'} title={'Users & Employees'}>
        <UsersIcon svgClassName={svgClassName} />
      </NavItem>
    </nav>
  );
}
