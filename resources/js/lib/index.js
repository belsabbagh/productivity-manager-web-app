export function formatColor(r, g, b) {
    return `rgb(${r},${g},${b})`
}

export function getUtilizationColor(val) {
    const r = (val <= 1) ? 255 * val : 255,
        g = (val <= 1) ? 255 : 100,
        b = 100
    return formatColor(r, g, b)
}

export function isAdmin(userType){
    return userType === 3
}

export function isEmployee(userType){
    return userType === 2
}
