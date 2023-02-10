export function isFoundString(item, search) {
    return (
        item.toLowerCase().includes(search.toLowerCase()) || search.length === 0
    );
}

export function isFoundArray(item, data) {
    return data.includes(item) || data.length === 0;
}
