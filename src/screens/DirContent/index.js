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
import { codeSearch } from "../../services/request/code";

export default function DirContent({ route }) {
  const navigation = useNavigation();
  const [dir, setDir] = useState([]);

  async function dirSearch() {
    try {
      const result = await codeSearch(
        route.params.user.owner.login,
        route.params.user.name,
        route.params.dir.name
      );
      if (result) {
        setDir(result);
      }
    } catch (e) {}
  }
  useEffect(() => {
    dirSearch();
  }, []);

  return (
    <Container>
      <HeaderRow>
        <IconButton onPress={navigation.goBack}>
          <Ionicons name="arrow-back" style={{ color: "white" }} size={25} />
        </IconButton>
        <Title>{route.params.dir.name}</Title>
      </HeaderRow>

      <FileContainer>
        <FileList
          data={dir}
          numColumns={2}
          keyExtractor={(item) => item.sha}
          renderItem={({ item }) => (
            <File
              data={item}
              onPress={
                item.type == "file"
                  ? () =>
                      navigation.navigate("FileContent", {
                        code: item,
                        user: route.params.info,
                      })
                  : () =>
                      navigation.navigate("DirContent", {
                        dir: item,
                        user: route.params.info,
                      })
              }
            />
          )}
        />
      </FileContainer>
    </Container>
  );
}
