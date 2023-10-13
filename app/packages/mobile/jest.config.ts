import { resolve } from "node:path";

export default {
  displayName: "mobile",
  resolver: "@nx/jest/plugins/resolver",
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg))",
  ],
  moduleFileExtensions: ["ts", "js", "html", "tsx", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/test-setup.ts"],
  moduleNameMapper: {
    "\\.svg$": "@nx/expo/plugins/jest/svg-mock",
  },
  testMatch: [
    resolve(__dirname, "src/**/*.spec.tsx"),
    resolve(__dirname, "src/**/*.spec.ts"),
    resolve(__dirname, "src/**/*.test.tsx"),
    resolve(__dirname, "src/**/*.test.ts"),
  ],
};
