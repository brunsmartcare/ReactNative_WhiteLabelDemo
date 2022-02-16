module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
  ],
  plugins: ['react-native-reanimated/plugin'],
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
};
