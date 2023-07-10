export default {
  preset: 'jest-preset-angular/presets/defaults-esm',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    rxjs: '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
  },
};
