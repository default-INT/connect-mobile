import { proxyPath } from '@utils/router/proxyPath';

const mainRoutesConfig = {
  auth: {
    landing: {},
    login: {},
  },
  app: {
    chats: {
      root: {},
    },
    eventsList: {
      root: {},
    },
    eventsMap: {
      root: {},
    },
    feed: {
      root: {},
    },
    profile: {
      root: {},
    },
  },
};

export const r = proxyPath<typeof mainRoutesConfig>(mainRoutesConfig);
export type TAuthNavigator = typeof mainRoutesConfig['auth'];
