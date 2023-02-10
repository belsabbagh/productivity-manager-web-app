export function isFoundString(item, search) {
    return (
        item.toLowerCase().includes(search.toLowerCase()) || search.length === 0
    );
}

export function isFoundArray(item, data) {
    return data.includes(item) || data.length === 0;
}

function getProjectSkills(team) {
    let skills = [];
    team.forEach((emp) => emp.skills.forEach((skill) => skills.push(skill.id)));
    return skills;
}

export function projectFound(item, filter) {
    const skills = getProjectSkills(item.team);
    return (
        isFoundString(item.name, filter.search) &&
        isFoundArray(item.region.id, filter.region) &&
        skills.some((skill) => isFoundArray(skill, filter.skill))
    );
}

function inUtilizationRange(val, range) {
    return val >= range[0] && val <= range[1];
}

export function employeeFound(item, filter) {
    const skills = item.skills.map((skill) => skill.id);
    return (
        isFoundString(item.email, filter.search) &&
        inUtilizationRange(item.total_utilization, filter.utilization) &&
        skills.some((skill) => isFoundArray(skill, filter.skill))
    );
}
