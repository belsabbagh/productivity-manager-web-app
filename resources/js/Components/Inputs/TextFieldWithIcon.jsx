import {TextField} from '@mui/material';
import React from 'react';
import InputWithIcon from '@/Components/Inputs/InputWithIcon';

export default function TextFieldWithIcon({
  name,
  label,
  error,
  initialValue = '',
  onChange,
  icon,
}) {
  const input = (
    <TextField
      name={name}
      sx={{minWidth: 1}}
      className="bg-content"
      required
      defaultValue={initialValue}
      label={label}
      variant="outlined"
      onChange={onChange}
    />
  );
  return <InputWithIcon icon={icon} input={input} error={error} />;
}
