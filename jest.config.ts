import { compilerOptions } from './tsconfig.json';

import { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

const jestConfig: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};

export default jestConfig;
