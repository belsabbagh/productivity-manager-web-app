export function isFoundString(item, search) {
    return item.toLowerCase().includes(search.toLowerCase()) || search.length === 0;
}

export function isFoundArray(item, data) {
    return data.includes(item) || data.length === 0;
}

export function projectFound(item, filter) {
    return isFoundString(item.name, filter.search)
        && isFoundArray(item.region.id, filter.region);
}

function inUtilizationRange(val, range) {
    return val >= range[0] && val <= range[1];
}

export function employeeFound(item, filter) {
    return isFoundString(item.email, filter.search)
        && inUtilizationRange(item.total_utilization, filter.utilization)
    }
