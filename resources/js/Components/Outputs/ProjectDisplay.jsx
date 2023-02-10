import {List, ListItem} from '@mui/material';
import AttributeDisplay from '@/Components/Outputs/AttributeDisplay';
import React from 'react';
import {Link} from '@inertiajs/inertia-react';
import {ArrowForwardIos} from '@mui/icons-material';

export default function ProjectDisplay({
  data,
  label,
  itemValueKey,
  itemId = 'id',
  className,
  resource,
}) {
  return (
    <AttributeDisplay label={label} className={className}>
      <List className=" w-full" sx={{maxHeight: 128, overflow: 'auto'}}>
        {data.map((i) => {
          const itemHref = `/${resource}/${i[itemId]}`;
          return (
            <ListItem
              className="bg-textbox flex flex-row justify-between items-center"
              key={i[itemId]}
            >
              <Link
                href={itemHref}
                className={
                  'flex flex-row justify-between w-full rounded-lg hover:bg-gray p-1'
                }
              >
                <div className="">{i[itemValueKey]}</div>
                <div>
                  <ArrowForwardIos sx={{color: 'black'}} />
                </div>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </AttributeDisplay>
  );
}
