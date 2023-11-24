import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Repositories from "../screens/Repositories";
import RepositoryInfo from "../screens/RepositoryInfo";
import FileContent from "../screens/FileContent";
import DirContent from "../screens/DirContent";

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
      <Stack.Screen
        name="FileContent"
        component={FileContent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DirContent"
        component={DirContent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
