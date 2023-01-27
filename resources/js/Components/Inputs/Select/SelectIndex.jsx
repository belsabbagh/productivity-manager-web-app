import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import * as PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250},
  },
};

class SelectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: props.choices ?? '',
    };
  }

  updateChoices(event) {
    const {
      target: {value},
    } = event;
    this.setState({
      choices: this.buildChoices(value),
    });
    this.props.onChange(event);
  }

  buildChoices(value) {
    return typeof value === 'string' ? value.split(',') : value;
  }

  render() {
    return (
      <FormControl sx={{minWidth: 1}}>
        <InputLabel id={'simple-select'}>{this.props.label}</InputLabel>
        <Select
          sx={{minWidth: 1}}
          className="bg-content"
          labelId={'simple-select'}
          name={this.props.name}
          value={this.state.choices}
          onChange={this.updateChoices}
          input={<OutlinedInput label="Tag" />}
          MenuProps={MenuProps}
        >
          {this.props.data.map((i) => this.props.getItem(i))}
        </Select>
      </FormControl>
    );
  }
}

SelectIndex.propTypes = {
  data: PropTypes.arrayOf(Object),
  required: PropTypes.bool,
  label: PropTypes.string,
  getItem: PropTypes.func,
  name: PropTypes.string,
};

SelectIndex.defaultProps = {
  required: false,
  getItem: (i) => {
    return (
      <MenuItem key={i['id']} value={i['id']}>
        {i['name']}
      </MenuItem>
    );
  },
};

export default SelectIndex;
