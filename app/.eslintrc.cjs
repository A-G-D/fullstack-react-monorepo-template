const { resolve } = require("path");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/typescript"),
    require.resolve("@vercel/style-guide/eslint/react"),
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: [
    "coverage",
    "dist",
    ".eslintrc.cjs",
    ".prettierrc.cjs",
    "postcss.config.js",
    "tailwind.config.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
    extraFileExtensions: [".workspace"],
  },
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/no-default-export": "off",
    "import/order": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unicorn/filename-case": "off",
  },
};
