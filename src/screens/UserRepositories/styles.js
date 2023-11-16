import styled from "styled-components/native";

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const Title = styled.Text`
  font-family: OpenSans-Bold;
  font-size: 18px;
  margin: 10px 10px;
  color: aliceblue;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin: 10px 20px;
`;
