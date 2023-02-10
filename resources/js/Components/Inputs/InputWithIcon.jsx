import React from 'react';
import InputError from '@/Components/Inputs/InputError';

export default function InputWithIcon({input, icon, error = null}) {
  return (
    <div className={'flex flex-col justify-start  mb-2'}>
      <div className="flex flex-row justify-start">
        <div className=" bg-content p-3 border rounded border-gray flex flex-row justify-center items-center">
          {icon}
        </div>
        {input}
      </div>
      <InputError message={error} />
    </div>
  );
}
