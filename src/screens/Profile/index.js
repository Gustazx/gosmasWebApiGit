import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import styles from "./styles";
import { searchUser } from "../../services/request/users";

import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [nomeUsurario, setNomeUsuario] = useState("");

  async function search() {
    const result = await searchUser(nomeUsurario);
    if (result) {
      setUser(result);
      navigation.navigate("Repositories", { user: result });
    } else {
      Alert.alert("Usuário não encontrado");
      setUser({});
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#363636" />

      <TextInput
        style={styles.input}
        value={nomeUsurario}
        placeholder="Busque por um usúario"
        onChangeText={setNomeUsuario}
      />
      <TouchableOpacity onPress={search}>
        <Text style={styles.text}>Busque</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{user.name}</Text>
    </View>
  );
}
