import * as React from "react";
import { Snackbar } from "react-native-paper";
import { Container } from "./styles";

export default function CustomSnackbar({ visible, onDismissSnackBar, text }) {
  return (
    <Container>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        {text}
      </Snackbar>
    </Container>
  );
}
