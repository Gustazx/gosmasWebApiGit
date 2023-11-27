import React, { useEffect, useState } from "react";
import Container from "../../components/Background/screenBackground";
import {
  CodeContainer,
  Code,
  HeaderRow,
  Title,
  ScrollViewCode,
} from "./styles";
import { codeSearch } from "../../services/request/code";
import IconButton from "../../components/IconButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import CustomSnackbar from "../../components/Snackbar";

export default function FileContent({ route }) {
  const [code, setCode] = useState("");
  const [visible, setVisible] = useState(false);
  const Buffer = require("buffer").Buffer;
  const navigation = useNavigation();

  async function getCode() {
    try {
      const result = await codeSearch(
        route.params.user.owner.login,
        route.params.user.name,
        route.params.code.name
      );
      if (result) {
        setCode(result.content);
      }
    } catch (e) {}
  }

  useEffect(() => {
    getCode();
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [visible]);

  const decodedCode = Buffer.from(`${code}`, "base64").toString("utf-8");

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(decodedCode.toString());
    setVisible(true);
  };

  return (
    <Container>
      <HeaderRow>
        <IconButton onPress={navigation.goBack}>
          <Ionicons name="arrow-back" style={{ color: "white" }} size={25} />
        </IconButton>
        <Title>{route.params.code.name}</Title>
        <IconButton onPress={copyToClipboard}>
          <Ionicons name="copy" style={{ color: "white" }} size={25} />
        </IconButton>
      </HeaderRow>
      <CodeContainer>
        <ScrollViewCode>
          <Code>{decodedCode}</Code>
        </ScrollViewCode>
      </CodeContainer>
      <CustomSnackbar
        text={"Copiado para a área de transfêrencia"}
        visible={visible}
        onDismiss={() => setVisible(false)}
      />
    </Container>
  );
}
