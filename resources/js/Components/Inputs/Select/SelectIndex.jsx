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

class SelectIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: props.choices ?? "",
        }
    }

    updateChoices = (event) => {
        const {target: {value}} = event;
        this.setState({
            choices: typeof value === 'string' ? value.split(',') : value
        });
        this.props.onChange(event)
    };

    render() {
        return (
            <Select
                labelId={'simple-select'}
                label={this.props.label}
                name={this.props.name}
                value={this.state.choices}
                onChange={this.updateChoices.bind(this)}
                input={<OutlinedInput label="Tag"/>}
                MenuProps={MenuProps}
            >
                {this.props.data.map((i) => this.props.getItem(i))}
            </Select>
        );
    }
}

SelectIndex.propTypes = {
    data: PropTypes.arrayOf(Object),
    required: PropTypes.bool,
    label: PropTypes.string,
    getItem: PropTypes.func,
    name: PropTypes.string
}

SelectIndex.defaultProps = {
    required: false,
    getItem: (i) => {
        return (
            <MenuItem key={i['id']} value={i['id']}>{i['name']}</MenuItem>
        )
    }
}

export default SelectIndex
