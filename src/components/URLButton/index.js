import React, { useCallback } from "react";
import { Linking, Alert } from "react-native";
import { Button, Text } from "./styles";

export default function OpenURLButton({ url, text }) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`URL INVALIDA: ${url}`);
    }
  }, [url]);
  return (
    <Button onPress={handlePress}>
      <Text>{text}</Text>
    </Button>
  );
}
