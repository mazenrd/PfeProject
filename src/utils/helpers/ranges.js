import { inRange, findLast, get } from 'lodash';

export default (number, ranges) => {
  return get(
    findLast(ranges, ({ range: { start, end } }) => {
      return inRange(number, start, end);
    }),
    'name',
  );
};
