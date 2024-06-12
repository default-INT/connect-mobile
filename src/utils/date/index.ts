import { addTime } from './addTime';
import { enteredDateToUTC } from './enteredDateToUTC';
import { formatDate, options } from './formatDate';
import { getDaysInMonth } from './getDaysInMonth';
import { getLocalDate } from './getLocalDate';
import { makeTimestampFromTimeString } from './makeTimestampFromTimeString';
import { separateTimeInRanges } from './separateTimeInRanges';
import { formatTime } from './formatTime';

export const date = {
  addTime,
  enteredDateToUTC,
  formatDate,
  formatTime,
  getDaysInMonth,
  getLocalDate,
  makeTimestampFromTimeString,
  separateTimeInRanges,
  options,
};
