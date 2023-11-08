import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Repositories({ route }) {
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" style={{ color: "white" }} size={35} />
    </View>
  );
}
