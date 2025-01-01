module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
  setupFilesAfterEnv: ['./jest-setup.js'],
};
