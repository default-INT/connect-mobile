const path = require("node:path");
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
    ["@babel/plugin-transform-private-methods", { "loose": true }],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': path.resolve(__dirname, './src/assets'),
          '@components': path.resolve(__dirname, './src/components'),
          '@constants': path.resolve(__dirname, './src/constants'),
          '@modules': path.resolve(__dirname, './src/modules'),
          '@utils': path.resolve(__dirname, './src/utils'),
          '@root': path.resolve(__dirname, './src'),
        },
      },
    ],
  ],
};
