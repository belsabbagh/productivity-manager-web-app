import { useState } from 'react';

export default function useProjectsFilter(data, filter) {
    const [filteredData, setFilteredData] = useState(data);
    const [filterValue, setFilterValue] = useState(filter);
    function filterData(key, value) {
        const newFilter= { ...filterValue, [key]: value }
        setFilterValue(newFilter);
        const filtered = data.filter(function (item) {
            if (newFilter.region.length === 0 && newFilter.search.length === 0) {
                return true;
            }
            return (item.name.toLowerCase().includes(newFilter.search.toLowerCase()) && newFilter.search.length > 0)
                || (newFilter.region.includes(item.region.id) && newFilter.region.length > 0)
        });
        setFilteredData(filtered);
    }
    return [filteredData, filterValue, filterData];
}
