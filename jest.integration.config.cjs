module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': [
      'babel-jest',
      {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: { node: 'current' },
              modules: 'commonjs'
            }
          ]
        ]
      }
    ]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$))'
  ],
  setupFilesAfterEnv: ['./test/setup-test.js'],
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/test/mocks/fileMock.js'
  },
  testMatch: ['**/test/integration/**/*.integration.test.js'],
  testTimeout: 20000
};