import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const CodeContainer = styled.ScrollView.attrs({
  bounces: false,
})`
  flex: 1;
  margin: 20px;
  border: 2px solid grey;
  border-radius: 8px;
  background-color: black;
`;

export const ScrollViewCode = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { width: 750 },
})``;

export const HeaderRow = styled.View`
  flex-direction: row;
  margin: 0px 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: OpenSans-Bold;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Code = styled.Text`
  font-size: 18px;
  font-family: OpenSans-Regular;
  color: white;
`;
