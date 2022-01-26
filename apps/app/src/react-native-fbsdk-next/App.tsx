import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { LoginButton, Settings } from "react-native-fbsdk-next";


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
