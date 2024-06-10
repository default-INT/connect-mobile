const fullD: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

const shortD: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const shortT: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
};

const fullT: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
};

const h12: Intl.DateTimeFormatOptions = {
  hour12: true,
};

const h24: Intl.DateTimeFormatOptions = {
  hour12: false,
};

export const formatOptions = {
  default: { ...fullD, ...shortT },
  fullD,
  shortD,
  fullT,
  shortT,
  h12,
  h24,
};
