import React from "react";
import { Input } from "./styles";

export const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  error,
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      error={error}
    />
  );
};
