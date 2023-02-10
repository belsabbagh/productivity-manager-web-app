import useFilter from '@/hooks/useFilter';
import {projectFound} from '@/lib/filters';
export default function useProjectsFilter(data, filter) {
    return useFilter(data, filter, projectFound);
}
