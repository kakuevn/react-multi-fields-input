module.exports = {
  testURL: 'http://localhost/',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>src/__mocks__/styleMock.ts',
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  setupFilesAfterEnv: ['./setupTests.ts'],
  collectCoverage: true,
}
