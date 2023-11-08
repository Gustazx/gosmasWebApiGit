import styled from "styled-components/native";
import React from "react";
import { StatusBar } from "react-native";

const Input = styled.TextInput`
  border-color: #808080;
  width: 100%;
  border-width: 1px;
  border-radius: 10px;
  padding: 10px;
  background-color: #dcdcdc;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #363636;
`;

const CustomTouchableOpacity = styled.TouchableOpacity`
  height: 40px;
  border-radius: 30px;
  width: 100px;
  justify-content: center;
  align-items: center;
  background-color: #956b6b;
  margin-top: 16px;
`;

const ButtonText = styled.Text`
  color: #dcdcdc;
  font-size: 16px;
`;

export const Button = ({ onPress }) => (
  <CustomTouchableOpacity onPress={onPress}>
    <ButtonText> Busque</ButtonText>
  </CustomTouchableOpacity>
);
export const CustomTextInput = ({ placeholder, value, onChangeText }) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export const Text = styled.Text`
  color: #dcdcdc;
`;

export const RotatedBox = styled.View`
  transform: rotate(90deg);
  text-shadow: 10px 5px;
  margin: 5px 7px 2px;
`;
