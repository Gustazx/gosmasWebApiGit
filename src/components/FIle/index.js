import React from "react";
import {
  BodyRow,
  Container,
  HeaderRow,
  Name,
  Type,
  IconContainer,
} from "./styles";
import Octicons from "react-native-vector-icons/Octicons";

export default function File({ data }) {
  return (
    <Container>
      <HeaderRow>
        <Name>{data.name}</Name>
      </HeaderRow>
      <BodyRow>
        <Type>{data.type}</Type>
      </BodyRow>
      <IconContainer>
        <Octicons
          name={data.type == "file" ? "file" : "file-directory"}
          size={18}
        />
      </IconContainer>
    </Container>
  );
}
