import React, { useState } from "react";
import { Alert, StatusBar } from "react-native";
import { Container, Text, Button, RotatedBox, Form } from "./styles";
import { searchUser } from "../../services/request/users";
import { CustomTextInput } from "../../components/CustomTextInput";

import { useNavigation } from "@react-navigation/native";

export default function Search() {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [nomeUsurario, setNomeUsuario] = useState("");

  async function search() {
    const result = await searchUser(nomeUsurario);
    if (result) {
      setUser(result);
      navigation.navigate("Profile", { user: result });
      setNomeUsuario("");
      setUser({});
    } else {
      Alert.alert("Usuário não encontrado");
    }
  }
  return (
    <Container>
      <Form>
        <CustomTextInput
          onChangeText={setNomeUsuario}
          value={nomeUsurario}
          placeholder={"Busque um usuario"}
        />
        <Button onPress={search} />
      </Form>

      <Text>{user.name}</Text>
      <RotatedBox />
    </Container>
  );
}
