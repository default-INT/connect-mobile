declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'react-native-config' {
  export interface INativeConfig {
    WEB_CLIENT_ID: string;
    IOS_CLIENT_ID: string;
    API_URL: string;
    MAP_BOX_PUB_KEY: string;
  }

  export const Config: INativeConfig;
  export default Config;
}
