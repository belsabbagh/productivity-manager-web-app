import useFilter from '@/hooks/useFilter';
import matchProject from '@/lib/filters/matchProject';
export default function useProjectsFilter(data, filter) {
    return useFilter(data, filter, matchProject);
}
