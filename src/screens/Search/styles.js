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

const CustomTouchableOpacity = styled.TouchableOpacity`
  border-radius: 15px;
  justify-content: center;
  background-color: #737067;
  margin: 0 10px;
  padding: 0 15px;
`;

const ButtonText = styled.Text`
  color: #dcdcdc;
  font-size: 16px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 10px;
`;

export const Button = ({ onPress }) => (
  <CustomTouchableOpacity onPress={onPress}>
    <ButtonText> Buscar</ButtonText>
  </CustomTouchableOpacity>
);

export const Text = styled.Text`
  color: #dcdcdc;
`;

export const RotatedBox = styled.View`
  transform: rotate(90deg);
  text-shadow: 10px 5px;
  margin: 5px 7px 2px;
`;
