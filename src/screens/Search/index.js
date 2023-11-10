import React, { useState } from "react";
import { Alert } from "react-native";
import { Container, Button, Form } from "./styles";
import { searchUser } from "../../services/request/users";
import { CustomTextInput } from "../../components/CustomTextInput";
import IconButton from "../../components/IconButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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
        <IconButton
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        >
          <FontAwesome name="bars" style={{ color: "white" }} size={25} />
        </IconButton>
      </Form>

      <Form>
        <CustomTextInput
          onChangeText={setNomeUsuario}
          value={nomeUsurario}
          placeholder={"Busque um usuario"}
        />
        <Button onPress={search} />
      </Form>
    </Container>
  );
}
