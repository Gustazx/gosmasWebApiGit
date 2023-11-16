import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function Container({ children }) {
  return (
    <LinearGradient
      colors={["#363636", "#808080"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        paddingTop:
          Platform.OS == "ios"
            ? 10 + getStatusBarHeight(true)
            : 40 + getStatusBarHeight(true),
      }}
    >
      {children}
    </LinearGradient>
  );
}
