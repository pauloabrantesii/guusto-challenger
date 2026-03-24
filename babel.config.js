module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          '@domain': './src/@domain',
          '@application': './src/@application',
          '@components': './src/components',
          '@containers': './src/containers',
          '@services': './services',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
