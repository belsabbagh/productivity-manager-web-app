import React from 'react';
import SearchIcon from '@/Components/Icons/SearchIcon';
import MultipleSelectCheckmarks from '@/Components/Inputs/Select/MultipleSelectCheckmarks';
import {Slider} from '@mui/material';
const MAX_UTILIZATION = 3;

export default function EmployeeIndexFilter(props) {
  function valuetext(value) {
    return `${value}`;
  }

  const [sliderValue, setSliderValue] = React.useState([0, MAX_UTILIZATION]);
  function updateFilter(e) {
    if (e.target.name === 'utilization') {
      setSliderValue(e.target.value);
    }
    props.updateFilter(e.target.name, e.target.value);
  }
  return (
    <div className={'flex flex-col'}>
      <div className="flex flex-row w-full border border-gray-300 rounded-lg">
        <div className="flex items-center px-3 pointer-events-none ">
          <SearchIcon
            svgClassName={'w-5 h-5 text-gray-500 dark:text-gray-400'}
          />
        </div>
        <form>
          <input
            type="text"
            id="simple-search"
            className="bg-white border-0 text-gray-900 text-sm rounded-lg block w-full pl-3 p-2.5  dark:bg-white dark:placeholder-gray-400 dark:text-black"
            placeholder="Search"
            name="search"
            value={props.filter.search}
            onChange={updateFilter}
          ></input>
        </form>
      </div>
      <div className={'flex flex-row mt-2 items-bottom'}>
        <MultipleSelectCheckmarks
          name={'skill'}
          label={'Skills'}
          data={props.skills}
          onChange={updateFilter}
        />
        <div className={'ml-4 min-w-full'}>
          Utilization Range
          <Slider
            name="utilization"
            value={sliderValue}
            onChange={updateFilter}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{minWidth: 1, color: '#AFACD3'}}
            disableSwap
            min={0}
            max={3}
            step={0.1}
          />
        </div>
      </div>
    </div>
  );
}
