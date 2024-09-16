// jest.config.js
module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js',
  ],
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/jest.config.js'
  ],
  transformIgnorePatterns: [
    "node_modules/(?!react-native|@react-native|react-navigation|@react-navigation)"
  ],
};
