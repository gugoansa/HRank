/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  // Solo ejecutar archivos .test.ts
  testMatch: ["**/*.test.ts"],

  // Ignorar carpetas de Playwright
  testPathIgnorePatterns: ["/playwright/", "/e2e/"],

  // Usar tsconfig especial SOLO para Jest
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  }
};
