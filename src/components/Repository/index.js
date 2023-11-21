import React, { useState } from "react";
import {
  Title,
  Description,
  Container,
  Row,
  Forks,
  Stars,
  Text,
} from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
export default function Repository({ data, onPress }) {
  return (
    <Container onPress={onPress}>
      <Title>{data.name}</Title>
      <Description>{data.description ?? "Sem informação"}</Description>
      <Row>
        <Forks>
          <Icon name="fork" />
          <Text> {data.forks_count} </Text>
        </Forks>
        <Stars>
          <Icon name="star" />
          <Text>{data.stargazers_count}</Text>
        </Stars>
      </Row>
    </Container>
  );
}
