import React from 'react';
import Header from '@/Layouts/Header';

export default function Guest({children, title}) {
  return (
    <div className="min-h-screen sm:justify-center items-center pt-6 sm:pt-0 bg-background">
      <Header title={title} />
      <div className="min-h-12 pt-12 flex sm:justify-center items-center">
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 shadow-md overflow-hidden rounded-lg bg-content">
          {children}
        </div>
      </div>
    </div>
  );
}
