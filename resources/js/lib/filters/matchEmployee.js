import {isFoundString, isFoundArray} from '@/lib/filters/util';
function inUtilizationRange(val, range) {
    return val >= range[0] && val <= range[1];
}

export default function matchEmployee(item, filter) {
    const skills = item.skills.map((skill) => skill.id);
    return (
        isFoundString(item.email, filter.search) &&
        inUtilizationRange(item.total_utilization, filter.utilization) &&
        skills.some((skill) => isFoundArray(skill, filter.skill))
    );
}
