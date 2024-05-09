const EARLIEST_REFRESH_TIME = 1000 * 60 * 5; // 5 min

export const isTokenNeedRefresh = (expiration: string | null) => {
  if (!expiration) return false;

  return new Date(Date.now() + EARLIEST_REFRESH_TIME) > new Date(expiration);
};
