import { formatDistance, subDays } from 'date-fns';

const result = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });

console.log(result);