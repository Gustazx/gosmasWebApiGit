import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import UserRepositories from "../screens/UserRepositories";
import Repositories from "../screens/Repositories";
import RepositoryInfo from "../screens/RepositoryInfo";

export default function StackRoutesUser() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserRepositories"
          component={UserRepositories}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserRepositoryInfo"
          component={RepositoryInfo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
