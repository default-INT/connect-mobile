import { AxiosRequestConfig } from 'axios';

export const addData = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (!config.data) return config;

  const getParams = Object.entries(config.data).map(item => {
    if (Array.isArray(item[1])) {
      const [key, value] = item;

      return value.map(i => `${key}=${i}`).join('&');
    }

    return item.join('=');
  }).join('&');

  return {
    ...config,
    url: `${config.url}${getParams ? '?' : ''}${getParams}`,
  };
};
