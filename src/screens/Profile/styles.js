import React from "react";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled(LinearGradient).attrs({
  colors: ["#363636", "#808080"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${40 + getStatusBarHeight(true)}px;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: start;
  justify-content: start;
`;
