/*
  Use this utils to convert time in string like 2:12:0 to timestamp

  With option useTimeInSeconds will return timestamp in seconds instead of miliseconds

  With option useDecimalTime parse time using two digits:
   - '01' will be 1
   - '10' and '1' will bee 10 (normally '1' will be 1)
*/

interface IOptions {
  useTimeInSeconds?: boolean;
  useDecimalTime?: boolean;
}

export const makeTimestampFromTimeString = (time: string, options?: IOptions) => {
  const [hours = 0, minutes = 0, seconds = 0] = time.split(':').map(
    el => (options?.useDecimalTime ? Number(el.padEnd(2, '0')) : Number(el)),
  );

  return (hours * 3600 + minutes * 60 + seconds) * (options?.useTimeInSeconds ? 1 : 1000);
};
