import { FlatList } from "react-native";
import styled from "styled-components";

export const HeaderRow = styled.View`
  flex-direction: row;
  margin: 10px 10px;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-family: OpenSans-Bold;
  color: white;
  margin: 0px 15px;
`;

export const Owner = styled.Text`
  flex-direction: row;
  margin: 2px 12px;
`;

export const TextOwner = styled.Text`
  font-size: 16px;
  font-family: OpenSans-Regular;
  color: white;
  font-family: OpenSans-Bold;
`;
export const TextLanguage = styled.Text`
  font-size: 12px;
  font-family: OpenSans-Regular;
  color: white;
`;

export const Language = styled.Text`
  flex-direction: row;
  margin: 2px 12px;
`;

export const CreatedAt = styled.Text``;

export const UpdatedAt = styled.Text``;

export const FileContainer = styled.View`
  margin: 30px;
  align-self: center;
  width: 375px;
  height: 225px;
  border: 2px solid white;
  border-radius: 10px;
  flex: 1;
`;

export const DateRow = styled.View`
  text-align: row;
  margin: 40px;
`;

export const FileList = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsHorizontalScrollIndicator: false,
})``;
