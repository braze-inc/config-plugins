"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const config_1 = require("./config");
const withFacebookAndroid_1 = require("./withFacebookAndroid");
const withFacebookIOS_1 = require("./withFacebookIOS");
const withSKAdNetworkIdentifiers_1 = require("./withSKAdNetworkIdentifiers");
const pkg = require("react-native-fbsdk-next/package.json");
const withFacebook = (config, props) => {
    const newProps = config_1.getMergePropsWithConfig(config, props);
    config = withFacebookAndroid_1.withFacebookAppIdString(config, newProps);
    config = withFacebookAndroid_1.withFacebookManifest(config, newProps);
    config = withFacebookIOS_1.withFacebookIOS(config, newProps);
    config = withFacebookIOS_1.withUserTrackingPermission(config, newProps);
    // https://developers.facebook.com/docs/SKAdNetwork
    config = withSKAdNetworkIdentifiers_1.withSKAdNetworkIdentifiers(config, [
        "v9wttpbfk9.skadnetwork",
        "n38lu8286q.skadnetwork",
    ]);
    return config;
};
exports.default = config_plugins_1.createRunOncePlugin(withFacebook, pkg.name, pkg.version);
