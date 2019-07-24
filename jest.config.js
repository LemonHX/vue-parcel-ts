module.exports = {
  verbose: false,
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'vue'
  ],
  moduleDirectories: [
    'node_modules'
  ],
  transform: {
    '\\.(styl)$': 'jest-css-modules',
    '\\.(sass|scss)$': 'jest-css-modules',
    ".*\\.js": 'babel-jest',
    '.*\\.ts$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}',
    '!**/*.d.ts'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!vue-router)'
  ],
  snapshotSerializers: [
    'jest-serializer-html'
  ],
  testMatch: [
    // Default
    '**/test/**/*.(t|j)s'
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
      diagnostics: false,
    }
  }
}
