import styled from "styled-components/native";
import React from "react";
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

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const Title = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 18px;
  margin: 10px 10px;
  color: aliceblue;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin: 10px 20px;
`;
