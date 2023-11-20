import { createDrawerNavigator } from "@react-navigation/drawer";

import StackRoutes from "./stack.routes";
import Repositories from "../screens/Repositories";
import CustomDrawer from "../components/CustomDrawer";
import Icon from "react-native-vector-icons/AntDesign";

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
        name="User"
        component={StackRoutes}
        options={{
          headerShown: false,
          title: "Usuários",
          drawerIcon: ({}) => <Icon name="user" size={22} color={"#ccc"} />,
        }}
      />
      <Drawer.Screen
        name="Repositories"
        component={Repositories}
        options={{
          headerShown: false,
          title: "Repositórios",
          drawerIcon: ({}) => <Icon name="inbox" size={22} color={"#ccc"} />,
        }}
      />
    </Drawer.Navigator>
  );
}
