import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { REGISTRATION_PATH } from "../../constants";
import { RootStackParamList } from "../../App.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PasswordField } from "../../components";

export function LoginPage() {
  const { appName } = Constants.expoConfig.extra;

  console.log(`welcome to ${appName}`);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{appName}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <PasswordField onChangePassword={setPassword} password={password} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>
        Don’t have an account?{" "}
        <Text
          style={styles.Link}
          onPress={() => navigation.navigate(REGISTRATION_PATH)}
        >
          Sign up
        </Text>
      </Text>
      <TouchableOpacity>
        <Text style={styles.Link}>Forgot password?</Text>
      </TouchableOpacity>
      <View style={styles.separator}>
        <View style={styles.separatorLine}></View>
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.separatorLine}></View>
      </View>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Apple ID</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
