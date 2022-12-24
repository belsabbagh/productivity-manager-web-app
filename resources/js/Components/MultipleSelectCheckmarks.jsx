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

export default class MultipleSelectCheckmarks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: [],
            onChange: this.props.onChange
        }
    }

    render() {
        const updateChoices = (event) => {
            const {target: {value}} = event;
            this.setState({
                choices: typeof value === 'string' ? value.split(',') : value
            });
            this.state.onChange(event)
        };

        return (
            <FormControl sx={{minWidth: 1}} className="bg-content flex flex-row justify-start mb-2 ">
                <InputLabel id="skills-box">Skills</InputLabel>
                <Select
                    labelId="skills-box"
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
                        this.props.data.map((i) => {
                            return (
                                <MenuItem key={i['id']} value={i['id']}>
                                    <Checkbox checked={this.state.choices.indexOf(i['id']) > -1}/>
                                    <ListItemText primary={i['name']}/>
                                </MenuItem>
                            )
                        })
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
}

MultipleSelectCheckmarks.defaultProps = {required: false}
