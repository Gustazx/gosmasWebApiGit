import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import BackSvg from "../../assets/arrow-back.svg";

export default function Repositories({ route }) {
  return (
    <View style={styles.container}>
      <BackSvg width="100%" height="100%" />
    </View>
  );
}
