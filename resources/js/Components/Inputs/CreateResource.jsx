import {Link} from '@inertiajs/inertia-react';
import React from 'react';

export default function CreateResource({resource, href = null, label = null}) {
  const linkClassName = `
    text-white bg-[#AFACD3]
    mr-4 px-3 py-2
    rounded-lg hover:bg-gray
    font-medium flex items-center justify-between w-full md:w-auto
    `;
  return (
    <div>
      <Link href={href ?? `/${resource}s/create`} className={linkClassName}>
        {'+ ' + `Create ${resource}`}
      </Link>
    </div>
  );
}
