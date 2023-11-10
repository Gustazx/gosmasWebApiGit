import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Repositories from "../../screens/Repositores";

const Drawer = createDrawerNavigator();

export default function Drawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Repositories" component={Repositories} />
    </Drawer.Navigator>
  );
}
