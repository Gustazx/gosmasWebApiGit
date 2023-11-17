import React, { useState } from "react";
import Container from "../../components/Background";
import { Form, List, Row, Title } from "./styles";
import { CustomTextInput } from "../../components/CustomTextInput";
import { Button } from "../../components/Button";
import IconButton from "../../components/IconButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { searchRepositories } from "../../services/request/repositories";
import Repository from "../../components/Repository";

export default function Repositories({ navigation }) {
  const [name, setName] = useState("");
  const [repos, setRepos] = useState([]);

  async function search() {
    try {
      const result = await searchRepositories(name);
      if (result) {
        setRepos(result.items);
        console.log(result.items);
        setName("");
      }
    } catch (error) {}
  }

  return (
    <Container>
      <Row>
        <IconButton
          onPress={() => {
            navigation.getParent("Drawer").openDrawer();
          }}
        >
          <FontAwesome name="bars" style={{ color: "white" }} size={25} />
        </IconButton>
        <Title>Repositórios</Title>
      </Row>
      <Form>
        <CustomTextInput
          placeholder="Busque um repositório"
          value={name}
          onChangeText={setName}
        />
        <Button textButton={"Buscar"} onPress={search} />
      </Form>
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
