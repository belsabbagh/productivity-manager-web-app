const MAX = 255;
const GREEN = 100;
const ADMIN = 3;
const LEADER = 2;

export function formatColor(r, g, b) {
    return `rgb(${r},${g},${b})`;
}

export function getUtilizationColor(val) {
    const r = val <= 1 ? MAX * val : MAX,
        g = val <= 1 ? MAX : GREEN,
        b = 100;
    return formatColor(r, g, b);
}

export function isAdmin(userType) {
    return userType === ADMIN;
}

export function isLeader(userType) {
    return userType === LEADER;
}
