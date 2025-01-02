module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-button|@react-native|react-native-gesture-handler)/)',
  ],
  setupFilesAfterEnv: ['./jest-setup.js'],
};
