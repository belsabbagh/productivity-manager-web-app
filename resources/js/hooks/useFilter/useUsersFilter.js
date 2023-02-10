import useFilter from '@/hooks/useFilter';
import {isFoundString} from '@/lib/filters';

export default function useUsersFilter(data, filter) {
    return useFilter(data, filter, (i, f) => isFoundString(i.name, f.search));
}
