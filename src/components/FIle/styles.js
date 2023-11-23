import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 10px 10px 10px;
  border: 2px solid grey;
  border-radius: 8px;
  align-items: center;
  background-color: white;
  justify-content: space-between;
`;

export const HeaderRow = styled.Text`
  flex-direction: row;
`;

export const BodyRow = styled.Text`
  flex-direction: row;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-family: OpenSans-Bold;
`;

export const Type = styled.Text`
  font-size: 18px;
  font-family: OpenSans-Regular;
`;

export const IconContainer = styled.Text`
  font-family: OpenSans-Bold;
`;
