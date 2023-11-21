import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Repositories from "../screens/Repositories";
import RepositoryInfo from "../screens/RepositoryInfo";

const Stack = createNativeStackNavigator();

export default function StackRoutesRepositories() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Repositories"
        component={Repositories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RepositoryInfo"
        component={RepositoryInfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
