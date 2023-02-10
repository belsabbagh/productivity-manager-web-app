import useFilter from '@/hooks/useFilter';
import matchUser from '@/lib/filters/matchUser';

export default function useUsersFilter(data, filter) {
    return useFilter(data, filter, matchUser);
}
