module.exports = {
  verbose: true,
  roots: ['<rootDir>'],
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  projects: [
    {
      moduleDirectories: ['node_modules', 'src'],
      testMatch: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.tsx'],
      preset: 'ts-jest',
      testEnvironment: 'jest-environment-jsdom',
      displayName: 'client',
      modulePathIgnorePatterns: ['<rootDir>/server/'],
      moduleNameMapper: {
        // base
        '@/config/(.*)': '<rootDir>/config/$1',
        '@/pages/(.*)': '<rootDir>/pages/$1',
        '@/types/(.*)': '<rootDir>/types/$1',

        // src
        '@/api/(.*)': '<rootDir>/src/api/$1',
        '@/constants/(.*)': '<rootDir>/src/constants/$1',
        '@/components/(.*)': '<rootDir>/src/components/$1',
        '@/hooks/(.*)': '<rootDir>/src/hooks/$1',
        '@/layouts/(.*)': '<rootDir>/src/layouts/$1',
        '@/models/(.*)': '<rootDir>/src/models/$1',
        '@/components-pages/(.*)': '<rootDir>/src/pages/$1',
        '@/theme/(.*)': '<rootDir>/src/theme/$1',
        '@/utils/(.*)': '<rootDir>/src/utils/$1',
        '@/styles/(.*)': '<rootDir>/src/styles/$1',
        '@transforms/(.*)': '<rootDir>/src/transforms/$1',
        '@src/(.*)': '<rootDir>/src/$1',
        '@/assets/(.*)': '<rootDir>/public/assets/$1',

        // other
        'next/config': '<rootDir>/next.config',
      },
    },
    {
      preset: 'ts-jest',
      testEnvironment: 'node',
      displayName: 'server',
      testMatch: ['<rootDir>/server/**/__tests__/**/*.test.ts'],
      moduleNameMapper: {
        '^@/server/(.*)': '<rootDir>/server/$1',
      },
    },
  ],
};
