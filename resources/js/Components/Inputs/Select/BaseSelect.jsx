import React from 'react';
import {FormControl, InputLabel, OutlinedInput, Select} from '@mui/material';
import {
  string as stringPropType,
  array as arrayPropType,
  bool as boolPropType,
  func as funcPropType,
  number as numberPropType,
} from 'prop-types';

const ITEM_HEIGHT = 48,
  ITEM_PADDING_TOP = 8,
  COEFF = 4.5;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * COEFF + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class BaseSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: props.choices,
    };
  }

  static _getChoicesFromEvent(event) {
    const value = event.target.value;
    return typeof value === 'string' ? value.split(',') : value;
  }

  updateChoices(event) {
    this.setState({choices: BaseSelect._getChoicesFromEvent(event)});
    this.props.onChange(event);
  }

  render() {
    return (
      <FormControl sx={{minWidth: 1}}>
        <InputLabel id={'simple-basic-select'}>{this.props.label}</InputLabel>
        <Select
          sx={{minWidth: 1}}
          className="bg-content"
          labelId={'simple-basic-select'}
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

BaseSelect.propTypes = {
  data: arrayPropType,
  required: boolPropType,
  label: stringPropType,
  choices: arrayPropType,
  getItem: funcPropType,
  width: numberPropType,
};

export default BaseSelect;
