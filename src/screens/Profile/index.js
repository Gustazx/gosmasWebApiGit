import React, { useState } from "react";
import {
  HeaderRow,
  Title,
  Image,
  ProfileContainer,
  Button,
  TextRepositorios,
  FollowColumn,
  TextFollow,
  BioContainer,
  FullName,
  ProfileRow,
  Bio,
  ButtonRow,
} from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Clipboard from "expo-clipboard";
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
    bio: route.params.user.bio,
    url: route.params.user.html_url,
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(data.url);
  };

  return (
    <Container>
      <HeaderRow>
        <IconButton onPress={navigation.goBack}>
          <Ionicons name="arrow-back" style={{ color: "white" }} size={25} />
        </IconButton>
        <Title>{data.login}</Title>
      </HeaderRow>
      <ProfileContainer>
        <ProfileRow>
          <Image source={{ uri: `${route.params.user.avatar_url}` }} />
          <FollowColumn>
            <TextFollow>{data.followers}</TextFollow>
            <TextFollow>Seguidores</TextFollow>
          </FollowColumn>
          <FollowColumn>
            <TextFollow>{data.following}</TextFollow>
            <TextFollow>Seguindo</TextFollow>
          </FollowColumn>
        </ProfileRow>
      </ProfileContainer>
      <BioContainer>
        <FullName>{data.fullName}</FullName>
        <Bio>{data.bio}</Bio>
      </BioContainer>
      <ButtonRow>
        <Button
          onPress={() =>
            navigation.navigate("UserRepositories", {
              login: data.login,
            })
          }
        >
          <TextRepositorios>Repositorios</TextRepositorios>
        </Button>
        <Button onPress={copyToClipboard}>
          <TextRepositorios>URL</TextRepositorios>
        </Button>
      </ButtonRow>
    </Container>
  );
}
