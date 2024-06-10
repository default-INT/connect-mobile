import { separateTimeInRanges } from './separateTimeInRanges';

type TTimeOptions = 'numeric' | '2-digit';

interface IOptions {
  hours?: TTimeOptions;
  minutes?: TTimeOptions;
  seconds?: TTimeOptions;
}

interface IParams {
  stamp: number;
  options?: IOptions;
  timeNames?: string[];
}

const defaultTimeOptions: IOptions = {
  hours: '2-digit',
  minutes: '2-digit',
  seconds: '2-digit',
};

const defaultTimeNames = ['h ', 'm ', 's'];

const formatTimeItem = (time: number, formatOption: TTimeOptions) => {
  if (formatOption === 'numeric') return String(time);

  return String(time).padStart(2, '0');
};

export const formatTime = (params: IParams) => {
  const { stamp, options = defaultTimeOptions, timeNames = defaultTimeNames } = params;
  const timeObj = separateTimeInRanges(stamp) as any;

  return Object
    .entries(options)
    .reduce(
      (acc, [key, value], i) => `${acc}${formatTimeItem(timeObj[key], value)}${timeNames[i] || ''}`,
      '',
    )
    .trim();
};
