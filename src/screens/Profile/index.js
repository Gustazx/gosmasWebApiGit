import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Container, Row } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "./styles";

export default function Profile({ route }) {
  const navigation = useNavigation();
  return (
    <Container>
      <Row>
        <IconButton onPress={navigation.goBack}>
          <Ionicons name="arrow-back" style={{ color: "white" }} size={35} />
        </IconButton>
      </Row>
    </Container>
  );
}
