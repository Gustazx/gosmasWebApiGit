import { Children } from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.BACKGROUND};
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: start;
  justify-content: start;
`;

const OpacityButton = styled.TouchableOpacity`
  color: #dcdcdc;
`;

export const IconButton = ({ children, onPress }) => (
  <OpacityButton onPress={onPress}>{children}</OpacityButton>
);
