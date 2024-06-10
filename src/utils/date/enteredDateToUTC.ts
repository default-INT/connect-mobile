/*
  Use this util to convert manual entered date (year, month and day or dateString)
  which contains (usually) only year, month and day
  to UTC ISO string to send date to api
*/

interface IEnteredDate {
  year: number | string;
  month: number | string;
  day: number | string;
}

type TOptions = Date | IEnteredDate | null;

export const enteredDateToUTC = (enteredDate: TOptions): string => {
  if (!enteredDate) return '';

  const isDateInstance = enteredDate instanceof Date;
  const year = isDateInstance ? enteredDate.getFullYear() : Number(enteredDate.year);
  const month = isDateInstance ? enteredDate.getMonth() : Number(enteredDate.month) - 1;
  const day = isDateInstance ? enteredDate.getDate() : Number(enteredDate.day);

  if (year < 0 || (!month && month !== 0) || month < 0 || !day) return '';

  // TODO: add user TZ offset to date
  const utcDate = Date.UTC(year, month, day);

  return new Date(utcDate).toISOString();
};
