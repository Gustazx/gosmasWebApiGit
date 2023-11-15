import React from "react";
import { CustomTouchableOpacity, ButtonText } from "./styles";

export const Button = ({ onPress }) => (
  <CustomTouchableOpacity onPress={onPress}>
    <ButtonText>Buscar</ButtonText>
  </CustomTouchableOpacity>
);
