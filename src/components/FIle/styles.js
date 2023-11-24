import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: 100px;
  margin: 10px 5px 10px;
  border: 2px solid grey;
  border-radius: 8px;
  align-items: center;
  background-color: white;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  font-family: OpenSans-Bold;
`;

export const Type = styled.Text`
  font-size: 18px;
  font-family: OpenSans-Regular;
`;

export const IconContainer = styled.View`
  padding: 10px;
  align-self: center;
`;
