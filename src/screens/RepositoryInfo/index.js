import React, { useEffect, useState } from "react";
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
import { userContent } from "../../services/request/userContent";

export default function RepositoryInfo({ route }) {
  const navigation = useNavigation();
  const [content, setContent] = useState([]);

  async function searchContent() {
    try {
      const result = await userContent(
        route.params.info.owner.login,
        route.params.info.name
      );
      if (result) {
        result.sort((a, b) => a.type.localeCompare(b.type));

        setContent(result);
        console.log(result);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    searchContent();
  }, []);

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
          data={content}
          numColumns={2}
          keyExtractor={(item) => item.sha}
          renderItem={({ item }) => <File data={item} />}
        />
      </FileContainer>
      <DateRow />
      <CreatedAt>{route.params.info.created_at}</CreatedAt>
      <UpdatedAt>{route.params.info.updated_at}</UpdatedAt>
    </Container>
  );
}
