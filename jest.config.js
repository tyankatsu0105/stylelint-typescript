module.exports = {
  testRegex: '(/tests/.*|(\\.|/)spec)\\.ts$',
  testPathIgnorePatterns: ['tests/utils'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testEnvironment: 'node'
};
