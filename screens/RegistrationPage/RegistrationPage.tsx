import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../styles";
import { RootStackParamList } from "../../App.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { HOME_PATH } from "../../constants";
import { PasswordField } from "../../components";
import { useAuth } from "../../contexts/AuthContext";

export function RegistrationPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signUp } = useAuth();
  const [error, setError] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  React.useEffect(() => {
    if (password !== confirmPassword) {
      setError("Passwords did not match");
    } else if (password === confirmPassword) {
      setError("");
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
    }
  }, [password, confirmPassword]);

  async function handleSubmit() {
    try {
      console.log({ email, password });
      signUp(email, password);
    } catch {
      setError("Failed to create an account");
    }
  }

  // Check if either email or password is empty
  const isLoginButtonDisabled = !email || !password;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="gray"
        onChangeText={setEmail}
      />
      <PasswordField onChangePassword={setPassword} password={password} />
      <PasswordField
        onChangePassword={setConfirmPassword}
        password={confirmPassword}
        placeholder="Confirm Password"
      />
      {/* Display error message */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity
        style={[styles.button, isLoginButtonDisabled && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={isLoginButtonDisabled}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Already have an account?</Text>
      <TouchableOpacity style={styles.link}>
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate(HOME_PATH)}
        >
          Log in
        </Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Apple ID</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
