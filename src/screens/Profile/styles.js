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

export const ProfileRow = styled.View`
  flex-direction: row;
  margin: 20px 20px;
`;

export const FollowersColumn = styled.View`
  margin: 0px 30px;
  justify-content: center;
  align-items: center;
`;

export const FollowingColumn = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextFollowers = styled.Text`
  font-size: 16px;
  color: white;
  margin: 5px;
`;
export const TextFollowing = styled.Text`
  font-size: 16px;
  color: white;
  margin: 5px;
`;

export const Repositorios = styled.TouchableOpacity`
  background-color: black;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 38px;
  border-radius: 12px;
  align-self: center;
`;

export const TextRepositorios = styled.Text`
  font-size: 16px;
  color: white;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 100px;
`;
