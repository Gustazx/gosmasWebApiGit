import React, { useCallback } from "react";
import Routes from "./src/routes";
import { StatusBar, View } from "react-native";
import "react-native-gesture-handler";
import { useFonts } from "@expo-google-fonts/open-sans";

export default App = () => {
  const [loaded] = useFonts({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!loaded) {
    return <View />;
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Routes />
    </>
  );
};
