import {
  FORGOT_PASSWORD_PATH,
  HOME_PATH,
  REGISTRATION_PATH,
} from "./constants";
import { RootStackParamList } from "./App.types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ForgotPasswordScreen, LoginPage, RegistrationPage } from "./screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME_PATH} component={LoginPage} />
        <Stack.Screen name={REGISTRATION_PATH} component={RegistrationPage} />
        <Stack.Screen
          name={FORGOT_PASSWORD_PATH}
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
