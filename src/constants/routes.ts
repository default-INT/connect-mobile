import { proxyPath } from '@utils/router/proxyPath';

const mainRoutesConfig = {
  auth: {
    landing: {},
    login: {},
  },
};

export const r = proxyPath<typeof mainRoutesConfig>(mainRoutesConfig);
export type TAuthNavigator = typeof mainRoutesConfig['auth'];
