import React from "react";
import { Title, Description, Container, FullName } from "./styles";

export default function Repository({ data }) {
  return (
    <Container>
      <Title>{data.name}</Title>
      <Description>{data.description ?? "Sem informação"}</Description>
    </Container>
  );
}
