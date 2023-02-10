import {useState} from 'react';
export default function useFilter(data, filter, filterFunction) {
    const [filteredData, setFilteredData] = useState(data);
    const [filterValue, setFilterValue] = useState(filter);
    function filterData(key, value) {
        const newFilter = {...filterValue, [key]: value};
        setFilterValue(newFilter);
        const filtered = data.filter((item) => filterFunction(item, newFilter));
        setFilteredData(filtered);
    }
    return [filteredData, filterValue, filterData];
}
