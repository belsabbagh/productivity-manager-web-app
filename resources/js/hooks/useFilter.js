import {useState} from 'react';
export default function useFilter(data, filter, filterBy) {
    const [filteredData, setFilteredData] = useState(data);
    const [filterValue, setFilterValue] = useState(filter);
    function filterData(value) {
        setFilterValue({search: value});
        const filtered = data.filter((item) => {
            return item[filterBy].toLowerCase().includes(value.toLowerCase());
        });
        setFilteredData(filtered);
    }
    return [filteredData, filterValue, filterData];
}
