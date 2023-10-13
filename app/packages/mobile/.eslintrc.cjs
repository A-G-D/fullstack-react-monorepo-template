const { resolve } = require("path");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
  extends: ["../../.eslintrc.cjs"],
  root: false,
  ignorePatterns: [
    "coverage",
    "src/storybook/**/*.ts",
    "src/storybook/**/*.tsx",
    ".eslintrc.cjs",
    "babel.config.js",
    "jest.config.ts",
    "metro.config.js",
    "test-setup.ts",
  ],
  parserOptions: {
    project,
  },
};
