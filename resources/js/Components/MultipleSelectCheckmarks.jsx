import React from 'react';
import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function MultipleSelectCheckmarks({data, label}) {
    const [name, setName] = React.useState([]);

    const handleChange = (event) => {
        const {target: {value}} = event;
        setName(typeof value === 'string' ? value.split(',') : value,);
    };

    return (
        <FormControl sx={{minWidth: 1}} className="bg-white flex flex-row justify-start mb-2 ">
            <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
            <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={name}
                onChange={handleChange}
                input={<OutlinedInput label="Tag"/>}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
            >
                {
                    data.map((i) => {
                        return (
                            <MenuItem key={i['id']} value={i['name']}>
                                <Checkbox checked={name.indexOf(i['name']) > -1}/>
                                <ListItemText primary={i['name']}/>
                            </MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    );
}
