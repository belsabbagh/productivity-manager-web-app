import {isFoundString} from '@/lib/filters/util';
export default (i, f) => isFoundString(i.name, f.search);
