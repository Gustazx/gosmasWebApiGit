import React from "react";
import Container from "../../components/Background/screenBackground";
import { Title, Text, HeaderRow } from "./styles";
import IconButton from "../../components/IconButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Animation from "../../components/Loading";

export default function RepositoryInfo({ route }) {
  const navigation = useNavigation();
  console.log(route.params.info.language);
  return (
    <Container>
      <HeaderRow>
        <IconButton onPress={navigation.goBack}>
          <Ionicons name="arrow-back" style={{ color: "white" }} size={25} />
        </IconButton>
        <Title>{route.params.info.name}</Title>
      </HeaderRow>

      <Text>{route.params.info.owner.login}</Text>
      <Text>{route.params.info.language}</Text>
    </Container>
  );
}
