import { ConfigPlugin, createRunOncePlugin } from "@expo/config-plugins";
import { ConfigProps, getMergePropsWithConfig } from "./config";

import {
  withFacebookAppIdString,
  withFacebookManifest,
} from "./withFacebookAndroid";
import { withFacebookIOS, withUserTrackingPermission } from "./withFacebookIOS";
import { withSKAdNetworkIdentifiers } from "./withSKAdNetworkIdentifiers";

const pkg = require("react-native-fbsdk-next/package.json");

const withFacebook: ConfigPlugin<ConfigProps | void> = (config, props) => {
  const newProps = getMergePropsWithConfig(config, props);
  config = withFacebookAppIdString(config, newProps);
  config = withFacebookManifest(config, newProps);
  config = withFacebookIOS(config, newProps);
  config = withUserTrackingPermission(config, newProps);
  // https://developers.facebook.com/docs/SKAdNetwork
  config = withSKAdNetworkIdentifiers(config, [
    "v9wttpbfk9.skadnetwork",
    "n38lu8286q.skadnetwork",
  ]);

  return config;
};

export default createRunOncePlugin(withFacebook, pkg.name, pkg.version);
