import {
  ConfigPlugin,
  AndroidConfig,
  IOSConfig,
  createRunOncePlugin,
  withPlugins,
} from "@expo/config-plugins";

/**
 * Apply google-signin configuration for Expo SDK 42 projects.
 */
const withGoogleSignin: ConfigPlugin = (config) => {
  return withPlugins(config, [
    // Android
    AndroidConfig.GoogleServices.withClassPath,
    AndroidConfig.GoogleServices.withApplyPlugin,
    AndroidConfig.GoogleServices.withGoogleServicesFile,

    // iOS
    IOSConfig.Google.withGoogle,
    IOSConfig.Google.withGoogleServicesFile,
  ]);
};

const pkg = {
  // Prevent this plugin from being run more than once.
  // This pattern enables users to safely migrate off of this
  // out-of-tree `@config-plugins/google-signin` to a future
  // upstream plugin in `google-signin`
  name: "google-signin",
  // Indicates that this plugin is dangerously linked to a module,
  // and might not work with the latest version of that module.
  version: "UNVERSIONED",
};

export default createRunOncePlugin(withGoogleSignin, pkg.name, pkg.version);
