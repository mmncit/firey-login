import { HOME_PATH, REGISTRATION_PATH } from "./constants";
import { RootStackParamList } from "./App.types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginPage, RegistrationPage } from "./screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME_PATH} component={LoginPage} />
        <Stack.Screen name={REGISTRATION_PATH} component={RegistrationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
