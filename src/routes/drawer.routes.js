import { createDrawerNavigator } from "@react-navigation/drawer";

import StackRoutesUser from "./stack.routes.user";
import Repositories from "../screens/Repositories";
import CustomDrawer from "../components/CustomDrawer";
import Icon from "react-native-vector-icons/AntDesign";
import StackRoutesRepositories from "./stack.routes.repositories";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      id="Drawer"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          color: "white",
          marginLeft: -15,
          fontFamily: "OpenSans-Regular",
        },
        drawerActiveBackgroundColor: "#111d5e",
        drawerStyle: {
          backgroundColor: "#040004",
        },
      }}
    >
      <Drawer.Screen
        name="DrawerUser"
        component={StackRoutesUser}
        options={{
          headerShown: false,
          title: "Usuários",
          drawerIcon: ({}) => <Icon name="user" size={22} color={"#ccc"} />,
        }}
      />
      <Drawer.Screen
        name="DrawerRepositories"
        component={StackRoutesRepositories}
        options={{
          headerShown: false,
          title: "Repositórios",
          drawerIcon: ({}) => <Icon name="inbox" size={22} color={"#ccc"} />,
        }}
      />
    </Drawer.Navigator>
  );
}
