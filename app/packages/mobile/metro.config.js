const { withNxMetro } = require("@nx/expo");
const { getDefaultConfig } = require("@expo/metro-config");
const { mergeConfig } = require("metro-config");
const exclusionList = require("metro-config/src/defaults/exclusionList");
const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const monorepoPackages = [path.resolve(workspaceRoot, "packages/shared")];

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  projectRoot,
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  watchFolders: [projectRoot, ...monorepoPackages],
  resolver: {
    extraNodeModules: monorepoPackages,
    disableHierarchicalLookup: true,
    nodeModulesPaths: [
      path.resolve(projectRoot, "node_modules"),
      path.resolve(workspaceRoot, "node_modules"),
    ],
    resolverMainFields: ["sbmodern", "browser", "main"],
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
    blockList: exclusionList([/^(?!.*node_modules).*\/dist\/.*/]),
    unstable_enableSymlinks: true,
    unstable_enablePackageExports: true,
  },
};

module.exports = withNxMetro(mergeConfig(defaultConfig, customConfig), {
  // Change this to true to see debugging info.
  // Useful if you have issues resolving modules
  debug: false,
  // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
  extensions: [],
  // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
  watchFolders: [],
});
