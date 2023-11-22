import React from "react";
import Container from "../../components/Background/screenBackground";
import {
  Title,
  Owner,
  Language,
  HeaderRow,
  TextOwner,
  TextLanguage,
  FileContainer,
  DateRow,
  CreatedAt,
  UpdatedAt,
  FileList,
} from "./styles";
import IconButton from "../../components/IconButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import File from "../../components/FIle";

export default function RepositoryInfo({ route }) {
  const navigation = useNavigation();
  console.log(route.params.info.contents_url);
  console.log(route.params.info.language);
  const data = [1, 2, 3, 4];

  return (
    <Container>
      <HeaderRow>
        <IconButton onPress={navigation.goBack}>
          <Ionicons name="arrow-back" style={{ color: "white" }} size={25} />
        </IconButton>
        <Title>{route.params.info.name}</Title>
      </HeaderRow>
      <Owner>
        <TextOwner>Dono: {route.params.info.owner.login}</TextOwner>
      </Owner>
      <Language>
        <TextLanguage>Linguagem: {route.params.info.language}</TextLanguage>
      </Language>
      <FileContainer>
        <FileList
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <>
              <File />
            </>
          )}
        />
      </FileContainer>
      <DateRow />
      <CreatedAt>{route.params.info.created_at}</CreatedAt>
      <UpdatedAt>{route.params.info.updated_at}</UpdatedAt>
    </Container>
  );
}
