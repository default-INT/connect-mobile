import { AxiosRequestConfig } from 'axios';

export const addPostMethod = (config: AxiosRequestConfig): AxiosRequestConfig => ({
  ...config,
  method: 'POST',
});
