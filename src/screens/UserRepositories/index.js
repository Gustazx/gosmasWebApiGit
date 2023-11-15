import React, { useState, useEffect } from "react";
import { Container, List, Title, Row } from "./styles";
import { searchUserRepositories } from "../../services/request/userRepositories";
import { useNavigation } from "@react-navigation/native";
import Repository from "../../components/Repository";
import IconButton from "../../components/IconButton";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function UserRepositories({ route }) {
  const navigation = useNavigation();
  const [repos, setRepos] = useState([]);
  console.log(route.params.login);

  async function search() {
    try {
      const result = await searchUserRepositories(route.params.login);
      if (result) {
        setRepos(result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    search();
  }, []);

  return (
    <Container>
      <Row>
        <IconButton onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" style={{ color: "white" }} size={25} />
        </IconButton>
        <Title>Repositorios</Title>
      </Row>
      <List
        data={repos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <>
            <Repository data={item} />
          </>
        )}
      />
    </Container>
  );
}
