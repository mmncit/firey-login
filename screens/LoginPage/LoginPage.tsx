import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./LoginPage.styles";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { REGISTRATION_PATH } from "../../constants";
import { RootStackParamList } from "../../App.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { appName } = Constants.expoConfig.extra;
  console.log(`welcome to ${appName}`);

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
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>
        Don’t have an account?{" "}
        <Text
          style={styles.signUpLink}
          onPress={() => navigation.navigate(REGISTRATION_PATH)}
        >
          Sign up
        </Text>
      </Text>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordLink}>Forgot password?</Text>
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
