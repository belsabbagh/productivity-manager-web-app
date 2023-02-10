import { useState } from 'react';
import { employeeFound } from '@/lib/filters';
export default function useEmployeesFilter(data, filter) {
    const [filteredData, setFilteredData] = useState(data);
    const [filterValue, setFilterValue] = useState(filter);
    function filterData(key, value) {
        const newFilter = { ...filterValue, [key]: value }
        setFilterValue(newFilter);
        const filtered = data.filter(function (item) {
            return employeeFound(item, newFilter)
        });
        setFilteredData(filtered);
    }
    return [filteredData, filterValue, filterData];
}
