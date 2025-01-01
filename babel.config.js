module.exports = {
  presets: ['module:@react-native/babel-preset', '@babel/preset-typescript'],
  env: {
    test: {
      presets: [['@babel/preset-env']],
    },
  },
  plugins: [['@babel/plugin-transform-private-methods', { loose: true }]],
};
