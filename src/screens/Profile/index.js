import React from "react";
import {
  Container,
  Row,
  Title,
  Image,
  ImageContainer,
  FollowContainer,
  Repositorios,
  Text,
} from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../../components/IconButton";

export default function Profile({ route }) {
  const navigation = useNavigation();
  return (
    <Container>
      <Row>
        <IconButton onPress={navigation.goBack}>
          <Ionicons name="arrow-back" style={{ color: "white" }} size={35} />
        </IconButton>
        <Title>{route.params.user.login}</Title>
      </Row>
      <ImageContainer>
        <Image source={{ uri: `${route.params.user.avatar_url}` }} />
      </ImageContainer>
      <FollowContainer>
        <Text>{route.params.user.followers}</Text>
        <Text>{route.params.user.following}</Text>
      </FollowContainer>
      <Repositorios
        onPress={() =>
          navigation.navigate("UserRepositories", { user: route.params.user })
        }
      >
        <Text>Repositorios</Text>
      </Repositorios>
    </Container>
  );
}
