// jest.config.js
module.exports = {
  preset: 'jest-preset-angular/presets/defaults-esm',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: {
    rxjs: '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
  },
};
