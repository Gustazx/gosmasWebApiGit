import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 20px;
  font-family: "OpenSans-Bold";
  color: white;
  margin: -1px 15px;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  padding: 5px 10px;
`;

export const ProfileContainer = styled.View`
  margin: 20px 20px;
`;

export const ProfileRow = styled.View`
  flex-direction: row;
`;

export const FollowColumn = styled.View`
  margin: 20px -10px 20px 40px;
  justify-content: center;
  align-items: center;
`;

export const TextFollow = styled.Text`
  font-size: 16px;
  color: white;
  font-family: OpenSans-Regular;
  margin: 5px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 0px 12px;
`;
export const Button = styled.TouchableOpacity`
  background-color: #7ea0b7;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 38px;
  border-radius: 12px;
  flex: 1;
  margin: 0px 6px;
`;

export const TextRepositorios = styled.Text`
  font-size: 16px;
  color: white;
  font-family: OpenSans-Regular;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 100px;
`;

export const FullName = styled.Text`
  font-size: 16px;
  font-family: OpenSans-Bold;
  color: white;
`;

export const Bio = styled.Text`
  font-size: 12px;
  font-family: OpenSans-Regular;
  color: white;
  padding: 16px 0px 10px;
`;

export const BioContainer = styled.View`
  margin: -10px 20px 0px;
`;
