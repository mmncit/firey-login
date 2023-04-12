import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./PasswordField.styles";
import { PasswordFieldProps } from "./PasswordField.types";

export function PasswordField({
  onChangePassword,
  password,
  placeholder,
}: PasswordFieldProps) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.input}>
      <TextInput
        onChangeText={onChangePassword}
        value={password}
        style={styles.password}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder ?? "Password"}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eye}>
        <MaterialIcons
          name={secureTextEntry ? "visibility-off" : "visibility"}
          size={24}
          color="#666"
        />
      </TouchableOpacity>
    </View>
  );
}
