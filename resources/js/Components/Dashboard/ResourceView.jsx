import React from 'react';
import ResourceHeader from '@/Components/Dashboard/ResourceHeader';

export default function ResourceView({children, resource}) {
  return (
    <div
      className={
        'bg-content flex flex-col justify-center p-6 my-3 mx-3 rounded-lg'
      }
    >
      <ResourceHeader resource={resource} />
      {children}
    </div>
  );
}
