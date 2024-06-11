module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js', // CSSファイルをモックする
  },
  moduleFileExtensions: ['js', 'jsx'],
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: [
    "<rootDir>/src/**/*.test.js",  // srcフォルダ内のApp.test.jsを対象にする
    "<rootDir>/assets/**/*.test.js" // assetsフォルダ内のApp.test.jsを対象にする
  ],
}
