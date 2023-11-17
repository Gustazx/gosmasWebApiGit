import React from "react";
import {
  HeaderRow,
  Title,
  Image,
  ProfileRow,
  Repositorios,
  TextRepositorios,
  FollowersColumn,
  TextFollowers,
  FollowingColumn,
  TextFollowing,
  BioContainer,
  FullName,
} from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../../components/IconButton";
import Container from "../../components/Background";

export default function Profile({ route }) {
  const navigation = useNavigation();
  data = {
    login: route.params.user.login,
    followers: route.params.user.followers,
    following: route.params.user.following,
    fullName: route.params.user.name,
  };
  return (
    <Container>
      <HeaderRow>
        <IconButton onPress={navigation.goBack}>
          <Ionicons name="arrow-back" style={{ color: "white" }} size={25} />
        </IconButton>
        <Title>{data.login}</Title>
      </HeaderRow>
      <ProfileRow>
        <Image source={{ uri: `${route.params.user.avatar_url}` }} />
        <FollowersColumn>
          <TextFollowers>{data.followers}</TextFollowers>
          <TextFollowers>Seguidores</TextFollowers>
        </FollowersColumn>
        <FollowingColumn>
          <TextFollowing>{data.following}</TextFollowing>
          <TextFollowing>Seguindo</TextFollowing>
        </FollowingColumn>
      </ProfileRow>
      <BioContainer>
        <FullName>{data.fullName}</FullName>
      </BioContainer>

      <Repositorios
        onPress={() =>
          navigation.navigate("UserRepositories", {
            login: data.login,
          })
        }
      >
        <TextRepositorios>Repositorios</TextRepositorios>
      </Repositorios>
    </Container>
  );
}
