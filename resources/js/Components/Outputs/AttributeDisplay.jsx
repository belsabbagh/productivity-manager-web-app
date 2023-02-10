import React from 'react';

export default function AttributeDisplay({className = '', label, children}) {
  return (
    <div className={className + 'flex flex-col pb-2'}>
      <div className="p-2 pb-0">{label}</div>
      {children}
    </div>
  );
}
