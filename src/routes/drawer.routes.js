import { createDrawerNavigator } from "@react-navigation/drawer";

import StackRoutes from "./stack.routes";
import Repositories from "../screens/Repositories";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator id="Drawer">
      <Drawer.Screen
        name="User"
        component={StackRoutes}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Repositories"
        component={Repositories}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
