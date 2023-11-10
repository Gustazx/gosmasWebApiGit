import React from "react";
import { OpacityButton } from "./styles";

export default IconButton = ({ children, onPress }) => (
  <OpacityButton onPress={onPress}>{children}</OpacityButton>
);
