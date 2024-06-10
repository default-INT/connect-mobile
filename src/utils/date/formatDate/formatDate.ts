/*
  Use this util to display dates
  All dates provided as strings w/o TZ mark will be displayed as UTC dates
*/

import { appConfig } from '@constants/appConfig';
import { formatOptions } from './constants';

export type TOptions = Intl.DateTimeFormatOptions & {
  delimiter?: string,
  withTimezoneOffset?: boolean,
};

const MILLISECONDS_IN_MINUTE = 60000;

const isStringWithTZ = (date: string | Date) => {
  if (typeof date !== 'string') return false;

  // Test is date string ends with Z or with GMT offset in ISO format:
  // GMT±hh | GMT±hhmm | GMT±hh:mm | GMT±hh:mm (Place)
  // https://en.wikipedia.org/wiki/ISO_8601
  return /.*((GMT)?(\+|-)\d\d:?(\d\d)?(\s\([\s\w]+\))?|Z)$/.test(date);
};

const getUtcDate = (date: string | Date) => {
  if (!isStringWithTZ(date)) return `${date}Z`;

  return date;
};

export const formatDate = (date: string | Date, options: TOptions = {}) => {
  const { delimiter, withTimezoneOffset = false, ...restOptions } = options;
  const language = appConfig.defaultLanguage;
  const stringParams = Object.keys(restOptions).length ? restOptions : formatOptions.default;
  // we convert date to Local date, format it and display in UTC
  // This login should be removed and dates should be displayed in local user time
  const localeDate = new Date(getUtcDate(date));
  const timezoneOffset = localeDate.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
  const dateTimeStamp = localeDate.valueOf() + (withTimezoneOffset ? timezoneOffset : 0);
  const dateString = new Date(dateTimeStamp).toLocaleString(language, stringParams);

  if (delimiter) return dateString.replace(/\D+/g, delimiter);

  return dateString;
};
