import ResourceView from '@/Components/Dashboard/ResourceView';
import ProjectRow from '@/Components/Dashboard/ProjectRow';
import React from 'react';
import ResourceList from '@/Components/Dashboard/ResourceList';

export default function ProjectsList({projects, className}) {
  return (
    <ResourceView className={className} resource={'projects'}>
      <ResourceList>
        {projects.map((i) => {
          return <ProjectRow data={i} key={i.id} />;
        })}
      </ResourceList>
    </ResourceView>
  );
}
