import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { env } from '@constants/env';
import { requestTokenInterceptor } from '../requestTokenInterceptor';

type TMiddleware = (config: AxiosRequestConfig) => AxiosRequestConfig;

export const makeRequest = (middlewares: TMiddleware[]) => {
  const instance = axios.create({
    baseURL: env.API_URL,
  });

  instance.interceptors.request.use(requestTokenInterceptor);

  return <TResponse>(config: AxiosRequestConfig = {}): AxiosPromise<TResponse> => {
    const params: AxiosRequestConfig = middlewares.reduce(
      (acc, middlewareFn) => middlewareFn(acc),
      config,
    );

    return instance.request(params);
  };
};
