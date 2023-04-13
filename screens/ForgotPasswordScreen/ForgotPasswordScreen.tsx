import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HOME_PATH, VALIDATE_CODE_PATH } from "../../constants";

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleResetPassword = () => {
    // code to send password reset email
    navigation.navigate(VALIDATE_CODE_PATH);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forgot Password</Text>
      <Text style={styles.text}>Enter your email to reset your password.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Send Code</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Remember password?</Text>
      <TouchableOpacity style={styles.link}>
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate(HOME_PATH)}
        >
          Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
}
