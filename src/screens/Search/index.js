import React, { useEffect, useState } from "react";
import { Form, Row, TextError, Title } from "./styles";
import { searchUser } from "../../services/request/users";
import { CustomTextInput } from "../../components/CustomTextInput";
import IconButton from "../../components/IconButton";
import { Button } from "../../components/Button";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Container from "../../components/Background/screenBackground";
import Loading from "../../components/Loading";

export default function Search({ navigation }) {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [nomeUsurario, setNomeUsuario] = useState("");
  const [loading, setLoading] = useState(false);

  async function search() {
    try {
      setLoading(true);
      const result = await searchUser(nomeUsurario);
      if (result) {
        setUser(result);
        navigation.navigate("Profile", { user: result });
        setNomeUsuario("");
        setUser({});
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }, [error]);

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
        <Title>Usuários</Title>
      </Row>

      <Form>
        <CustomTextInput
          onChangeText={setNomeUsuario}
          value={nomeUsurario}
          placeholder={"Busque um usuario"}
          error={error}
        />
        <Button onPress={search} textButton={"Buscar"} />
      </Form>
      {loading ? (
        <Loading />
      ) : error ? (
        <TextError>Nome de usuário inválido</TextError>
      ) : null}
    </Container>
  );
}
