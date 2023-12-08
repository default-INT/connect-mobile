module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
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
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@modules': './src/modules',
          '@types': './src/types',
          '@utils': './src/utils',
          '@root': './src',
        },
      },
    ],
  ],
};
