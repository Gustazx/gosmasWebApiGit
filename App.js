import React from "react";
import Routes from "./src/routes";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";

export default App = () => {
  return (
    <ThemeProvider theme={theme.COLORS}>
      <>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        />
        <Routes />
      </>
    </ThemeProvider>
  );
};
