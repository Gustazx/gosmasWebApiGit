import React, { useState } from "react";
import Container from "../../components/Background/screenBackground";
import { Form, List, Row, Title } from "./styles";
import { CustomTextInput } from "../../components/CustomTextInput";
import { Button } from "../../components/Button";
import IconButton from "../../components/IconButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { searchRepositories } from "../../services/request/repositories";
import Repository from "../../components/Repository";
import NotFound from "../../components/NotFundRepos";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../components/Loading";

export default function Repositories() {
  const [name, setName] = useState("");
  const [repos, setRepos] = useState([]);
  const [repositoryFound, setRepositoryFound] = useState(true);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  async function search() {
    try {
      setLoading(true);

      const result = await searchRepositories(name);
      if (result && result.items.length > 0) {
        setRepos(result.items);
        setName("");
        setRepositoryFound(true);
      } else {
        setRepositoryFound(false);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
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
      {loading ? (
        <Loading /> // Show loading animation while searching
      ) : repositoryFound ? (
        <List
          keyboardShouldPersistTaps="handled"
          data={repos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              <Repository
                data={item}
                onPress={() =>
                  navigation.navigate("RepositoryInfo", { info: item })
                }
              />
            </>
          )}
        />
      ) : (
        <NotFound />
      )}
    </Container>
  );
}
