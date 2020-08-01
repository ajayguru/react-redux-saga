module.exports = {
  verbose: true,
  setupFiles: [
    './test/setupEnzyme.js',
    './test/setupJest.js'
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.jsx',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    'test/.*.js$',
    '/styles/theme.js',
    '.*(.css|.less|.scss)'
  ],
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/utils/(.*)': '<rootDir>/src/utils/$1',
    '@/containers/(.*)': '<rootDir>/src/containers/$1',
    '@/reducers/(.*)': '<rootDir>/src/reducers/$1',
    '@/sagas/(.*)': '<rootDir>/src/sagas/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '~/(.*)': '<rootDir>/$1'
  },
  transform: {
    '\\.(css|scss)$': 'jest-css-modules-transform',
    '.*': 'babel-jest'
  }
};
