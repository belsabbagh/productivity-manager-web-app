import React from 'react';
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import {
  string as stringPropType,
  array as arrayPropType,
  bool as boolPropType,
  func as funcPropType,
  number as numberPropType,
} from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const DEFAULT_WIDTH = 100;
const COEFF = 4.5;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * COEFF + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class MultipleSelectCheckmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: props.choices,
    };
  }

  render() {
    const updateChoices = (event) => {
      const {
        target: {value},
      } = event;
      this.setState({
        choices: typeof value === 'string' ? value.split(',') : value,
      });
      this.props.onChange(event);
    };

    return (
      <FormControl
        sx={{minWidth: 1, mr: 2, width: this.props.width}}
        className={'bg-content'}
      >
        <InputLabel>{this.props.label}</InputLabel>
        <Select
          name={this.props.name}
          required
          multiple
          value={this.state.choices}
          onChange={updateChoices}
          input={<OutlinedInput label="Tag" />}
          renderValue={this.getRenderValue}
          MenuProps={MenuProps}
        >
          {this.props.data.map((i) =>
            this.props.getItem(i, (item) => {
              return this.state.choices.includes(item['id']);
            })
          )}
        </Select>
      </FormControl>
    );
  }

  getRenderValue = (selected) => {
    const names = selected.map((i) => {
      const found = this.props.data.filter((item) => item.id === i);
      return found[0].name;
    });
    return names.join(', ');
  };
}

MultipleSelectCheckmarks.propTypes = {
  data: arrayPropType,
  required: boolPropType,
  label: stringPropType,
  choices: arrayPropType,
  getItem: funcPropType,
  width: numberPropType,
};

MultipleSelectCheckmarks.defaultProps = {
  required: false,
  choices: [],
  width: DEFAULT_WIDTH,
  getItem: (i, isChecked) => {
    return (
      <MenuItem key={i['id']} value={i['id']}>
        <Checkbox checked={isChecked(i)} />
        <ListItemText primary={i['name']} />
      </MenuItem>
    );
  },
  onChange: (e) => {
    return null;
  },
};

export default MultipleSelectCheckmarks;
