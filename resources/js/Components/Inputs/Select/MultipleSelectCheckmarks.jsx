import React from 'react';
import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@mui/material";
import * as PropTypes from "prop-types";

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

class MultipleSelectCheckmarks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: props.choices,
        }
    }

    render() {
        const updateChoices = (event) => {
            const {target: {value}} = event;
            this.setState({
                choices: typeof value === 'string' ? value.split(',') : value
            });
            this.props.onChange(event)
        };

        return (
            <FormControl sx={{minWidth: 1, mr: 2}} className={"bg-content"}>
                <InputLabel>{this.props.label}</InputLabel>
                <Select
                    name={this.props.name}
                    required
                    multiple
                    value={this.state.choices}
                    onChange={updateChoices}
                    input={<OutlinedInput label="Tag"/>}
                    renderValue={this.getRenderValue}
                    MenuProps={MenuProps}
                >
                    {
                        this.props.data.map((i) => this.props.getItem(i,(i) => {
                            return this.state.choices.includes(i['id'])
                        }))
                    }
                </Select>
            </FormControl>
        );
    }

    getRenderValue = (selected) => {
        const names = selected.map((i) => {
            const found = this.props.data.filter((item) => item.id === i)
            return found[0].name
        })
        return names.join(', ')
    }
}

MultipleSelectCheckmarks.propTypes = {
    data: PropTypes.any,
    required: PropTypes.bool,
    label: PropTypes.any,
    choices: PropTypes.array,
    getItem: PropTypes.func,
}

MultipleSelectCheckmarks.defaultProps = {
    required: false,
    choices: [],
    getItem: (i, isChecked) => {
        return (
            <MenuItem key={i['id']} value={i['id']}>
                <Checkbox checked={isChecked(i)}/>
                <ListItemText primary={i['name']}/>
            </MenuItem>
        )
    },
    onChange: (e) => {return null}
}

export default MultipleSelectCheckmarks
