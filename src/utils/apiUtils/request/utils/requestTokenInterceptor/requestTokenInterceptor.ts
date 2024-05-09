import { InternalAxiosRequestConfig } from 'axios';
import { storage } from '@utils/storage';
import { store } from '@root//store';
import { signOut } from '@root/action/user';
import { isTokenNeedRefresh } from '../isTokenNeedRefresh';
import { refreshUserTokens } from '../refreshUserTokens';

const getHead = (axiosConfig: InternalAxiosRequestConfig, accessToken: string) => ({
  ...axiosConfig,
  headers: {
    ...axiosConfig.headers,
    Authorization: `Bearer ${accessToken}`,
  },
}) as InternalAxiosRequestConfig;

export const requestTokenInterceptor = async (axiosConfig: InternalAxiosRequestConfig) => {
  const tokenInfo = await storage.getTokens();

  if (!tokenInfo) return axiosConfig;

  const {
    accessToken,
    refreshToken,
    accessExpiredAt,
    refreshExpiredAt,
  } = tokenInfo;

  const isAccessNeedRefresh = accessToken && isTokenNeedRefresh(accessExpiredAt);
  const isRefreshNeedRefresh = refreshToken && isTokenNeedRefresh(refreshExpiredAt);

  if (isRefreshNeedRefresh) {
    store.dispatch(signOut());

    return axiosConfig;
  }

  if (!accessToken || isAccessNeedRefresh) {
    const tokens = await refreshUserTokens();

    if (!tokens) return axiosConfig;
    if (!tokens.accessToken) return axiosConfig;

    await storage.setTokens(tokens);

    return getHead(axiosConfig, tokens.accessToken);
  }

  return getHead(axiosConfig, accessToken);
};
