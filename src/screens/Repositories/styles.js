import styled from "styled-components";

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 5px 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  padding: 5px 15px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: white;
  font-family: OpenSans-Bold;
  padding: 0px 16px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 10 },
  showsHorizontalScrollIndicator: false,
})`
  padding: 30px 0px;
`;
