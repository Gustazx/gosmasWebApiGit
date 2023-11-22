import React, { useState, useEffect } from "react";
import { List, Title, Row } from "./styles";
import { searchUserRepositories } from "../../services/request/userRepositories";
import { useNavigation } from "@react-navigation/native";
import Repository from "../../components/Repository";
import IconButton from "../../components/IconButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import Container from "../../components/Background/screenBackground";
import NotFound from "../../components/NotFundRepos";
import Loading from "../../components/Loading";

export default function UserRepositories({ route }) {
  const navigation = useNavigation();
  const [repos, setRepos] = useState([]);
  const [repositoryFound, setRepositoryFound] = useState(true);
  const [loading, setLoading] = useState(false);

  console.log(route.params.login);

  async function search() {
    try {
      setLoading(true);
      const result = await searchUserRepositories(route.params.login);
      if (result && result.length > 1) {
        setRepos(result);
        setRepositoryFound(true);
      } else {
        setRepositoryFound(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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

      {loading ? (
        <Loading />
      ) : repositoryFound ? (
        <List
          data={repos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <>
              <Repository
                data={item}
                onPress={() =>
                  navigation.navigate("UserRepositoryInfo", { info: item })
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
