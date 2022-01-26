import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { LoginButton, Settings } from "react-native-fbsdk-next";

// Setting the facebook app id using setAppID
// Remember to set CFBundleURLSchemes in Info.plist on iOS if needed
Settings.setAppID('4812712715480611');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginButton/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
