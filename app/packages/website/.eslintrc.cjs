const { resolve } = require("path");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
  extends: ["../../.eslintrc.cjs"],
  root: false,
  ignorePatterns: [
    "coverage",
    "dist",
    ".eslintrc.cjs",
    "postcss.config.cjs",
    "tailwind.config.js",
    "vite.config.ts",
  ],
  parserOptions: {
    project,
  },
  rules: {
    "no-console": "off",
  },
};
