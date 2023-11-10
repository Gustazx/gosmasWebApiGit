import React from "react";
import { Container, Row } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../../components/IconButton";

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
