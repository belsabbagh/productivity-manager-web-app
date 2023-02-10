import { isFoundString } from '@/lib/filters';
import {useState} from 'react';
export default function useFilter(data, filter, filterBy) {
    const [filteredData, setFilteredData] = useState(data);
    const [filterValue, setFilterValue] = useState(filter);
    function filterData(value) {
        setFilterValue({search: value});
        const filtered = data.filter((item) => {
            return isFoundString(item[filterBy], value);
        });
        setFilteredData(filtered);
    }
    return [filteredData, filterValue, filterData];
}
