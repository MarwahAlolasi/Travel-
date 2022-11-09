import dayjs from 'dayjs';

import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import IsSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(isSameOrAfter);
dayjs.extend(IsSameOrBefore);
dayjs.extend(relativeTime);

export default dayjs;
