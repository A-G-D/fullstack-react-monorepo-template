const { resolve } = require("path");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
  extends: ["../../.eslintrc.cjs"],
  ignorePatterns: ["!**/*", ".eslintrc.cjs", "test-setup.ts"],
  parserOptions: {
    project,
  },
};
