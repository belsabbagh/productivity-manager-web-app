import matchEmployee from '@/lib/filters/matchEmployee';
import useFilter from '@/hooks/useFilter';
export default function useEmployeesFilter(data, filter) {
    return useFilter(data, filter, matchEmployee);
}
