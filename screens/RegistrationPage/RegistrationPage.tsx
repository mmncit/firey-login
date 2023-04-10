import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { styles } from "../styles";
import { RootStackParamList } from "../../App.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { HOME_PATH } from "../../constants";

export function RegistrationPage() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
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
