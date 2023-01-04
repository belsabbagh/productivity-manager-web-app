import ResourceView from '@/Components/Dashboard/ResourceView';
import EmployeeRow from '@/Components/Dashboard/EmployeeRow';
import React from 'react';
import ResourceList from '@/Components/Dashboard/ResourceList';

export default function EmployeesList({employees, className}) {
  return (
    <ResourceView className={className} resource={'employees'}>
      <ResourceList>
        {employees.map((i) => {
          return <EmployeeRow data={i} key={i.id} />;
        })}
      </ResourceList>
    </ResourceView>
  );
}
