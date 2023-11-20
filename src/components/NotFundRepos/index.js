import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { Container, NotFoundText } from "./styles";

export default function NotFound() {
  return (
    <Container>
      <Icon name="circle-with-cross" size={60} color={"white"} />
      <NotFoundText>Repositório não encontrado</NotFoundText>
    </Container>
  );
}
