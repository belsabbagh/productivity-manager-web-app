import {employeeFound} from '@/lib/filters';
import useFilter from '@/hooks/useFilter';
export default function useEmployeesFilter(data, filter) {
    return useFilter(data, filter, employeeFound);
}
