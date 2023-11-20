import React from "react";
import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Container, GosmasImage } from "./styles";

export default function CustomDrawer({ ...props }) {
  return (
    <Container>
      <GosmasImage source={require("../../assets/GosmasHeader.jpg")} />
      <DrawerItemList {...props} />
    </Container>
  );
}
