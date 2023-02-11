import {isFoundString, isFoundArray} from '@/lib/filters/util';
function getProjectSkills(team) {
    let skills = [];
    team.forEach((emp) => emp.skills.forEach((skill) => skills.push(skill.id)));
    return skills;
}

function matchSkills(skills, filter) {
    return (
        skills.some((skill) => isFoundArray(skill, filter)) ||
        (filter.length === 0 && skills.length === 0)
    );
}

export default function matchProject(item, filter) {
    const skills = getProjectSkills(item.team);
    return (
        isFoundString(item.name, filter.search) &&
        isFoundArray(item.region.id, filter.region) &&
        matchSkills(skills, filter.skill)
    );
}
