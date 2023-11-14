import React, { useState, useEffect } from "react";
import { Container, List } from "./styles";
import { searchUserRepositories } from "../../services/request/userRepositories";

export default function UserRepositories({ route }) {
  const [repos, setRepos] = useState([]);

  async function search() {
    try {
      const result = await searchUserRepositories(route.params.user.login);
      if (result) {
        setRepos(result);
        console.log(result);
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
      <List
        data={repos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          <Text>{item.name}</Text>;
        }}
      />
    </Container>
  );
}
