import React from "react";
import Routes from "./src/routes";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components";

export default App = () => {
  return (
    <ThemeProvider theme={theme.COLORS}>
      <Routes />
    </ThemeProvider>
  );
};
