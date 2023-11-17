import React, { useState } from "react";
import Container from "../../components/Background";
import { Form, Row } from "./styles";
import { CustomTextInput } from "../../components/CustomTextInput";
import { Button } from "../../components/Button";
import { IconButton } from "../../components/IconButton/";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Repositories() {
  // Using React.useState to manage the state of the 'name' variable
  const [name, setName] = useState("Naem");

  return (
    <Container>
      {/* Row containing an IconButton with a FontAwesome icon */}
      <Row>
        <IconButton>
          <FontAwesome name="bars" style={{ color: "white" }} size={25} />
        </IconButton>
      </Row>
      <Form>
        <CustomTextInput
          placeholder="Busque um repositório"
          value={name}
          onChangeText={setName}
        />
        <Button />
      </Form>
    </Container>
  );
}
