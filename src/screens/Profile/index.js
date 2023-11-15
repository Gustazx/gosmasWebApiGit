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
  data = {
    login: route.params.user.login,
    followers: route.params.user.followers,
    following: route.params.user.following,
  };
  return (
    <Container>
      <Row>
        <IconButton onPress={navigation.goBack}>
          <Ionicons name="arrow-back" style={{ color: "white" }} size={25} />
        </IconButton>
        <Title>{data.login}</Title>
      </Row>
      <ImageContainer>
        <Image source={{ uri: `${route.params.user.avatar_url}` }} />
      </ImageContainer>
      <FollowContainer>
        <Text>{data.followers}</Text>
        <Text>{data.following}</Text>
      </FollowContainer>
      <Repositorios
        onPress={() =>
          navigation.navigate("UserRepositories", {
            login: data.login,
          })
        }
      >
        <Text>Repositorios</Text>
      </Repositorios>
    </Container>
  );
}
