/*
  Use this util to subdivide timestamp by parts

  time - timestamp in miliseconds

  miliseconds, seconds, minutes, hours - visible part in timestamp
  for 2001ms - miliseconds will be 1, seconds will be 2 (check tests for more examples)

  timeInSeconds, timeInSeconds, timeInHours - how many seconds/minutes/hours
  in provided timestamp (check tests for more examples)
  timeInMiliseconds is excluded becouse it will be equal to time
*/

export const separateTimeInRanges = (time: number, useDoubleTimeFormat: boolean = false) => {
  const miliseconds = time % 1000;
  const timeInSeconds = (time - miliseconds) / 1000;
  const seconds = timeInSeconds % 60;
  const timeInMinutes = (timeInSeconds - seconds) / 60;
  const minutes = timeInMinutes % 60;
  const timeInHours = (timeInMinutes - minutes) / 60;
  const hours = timeInHours % 60;
  const data = { miliseconds, seconds, minutes, hours, timeInSeconds, timeInMinutes, timeInHours };

  if (!useDoubleTimeFormat) return data;

  return Object.entries(data).reduce((prev, [key, value]) => (
    { [key]: String(value).padStart(2, '0'), ...prev }), {} as typeof data);
};
