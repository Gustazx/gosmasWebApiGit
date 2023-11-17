import React from "react";
import { CustomTouchableOpacity, ButtonText } from "./styles";

export const Button = ({ onPress, textButton }) => (
  <CustomTouchableOpacity onPress={onPress}>
    <ButtonText>{textButton}</ButtonText>
  </CustomTouchableOpacity>
);
