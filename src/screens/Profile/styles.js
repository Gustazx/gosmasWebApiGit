import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled(LinearGradient).attrs({
  colors: ["#363636", "#808080"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding-top: ${40 + getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: "OpenSans-Bold";
  color: white;
  padding: 0px 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: 30px;
`;

export const FollowContainer = styled.View`
  flex-direction: row;
  margin: 30px;

  justify-content: center;
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

export const Text = styled.Text`
  font-size: 16px;
  color: white;
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;
