import { AxiosRequestConfig } from 'axios';

export const addGetMethod = (config: AxiosRequestConfig): AxiosRequestConfig => ({
  ...config,
  method: 'GET',
});
