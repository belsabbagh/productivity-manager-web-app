import {List, ListItem} from '@mui/material';
import AttributeDisplay from '@/Components/Outputs/AttributeDisplay';
import React from 'react';

export default function ListDisplay({
  data,
  label,
  itemValueKey,
  itemId = 'id',
  className,
}) {
  return (
    <AttributeDisplay label={label} className={className}>
      <List className=" w-full" sx={{maxHeight: 128, overflow: 'auto'}}>
        {data.map((i) => {
          return (
            <ListItem className="bg-textbox p-0.5" key={i[itemId]}>
              {i[itemValueKey]}
            </ListItem>
          );
        })}
      </List>
    </AttributeDisplay>
  );
}
