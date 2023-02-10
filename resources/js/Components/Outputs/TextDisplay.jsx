import React from 'react';
import AttributeDisplay from '@/Components/Outputs/AttributeDisplay';

export default function TextDisplay({className = '', label, value}) {
  return (
    <AttributeDisplay label={label} className={className}>
      <div
        style={{backgroundColor: '#4b00820d'}}
        className="p-2 rounded justify-items-center"
      >
        {value}
      </div>
    </AttributeDisplay>
  );
}
