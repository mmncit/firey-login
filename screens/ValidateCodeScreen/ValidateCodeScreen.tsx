import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RootStackParamList } from "../../App.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
import { REGISTRATION_PATH } from "../../constants";

export function ValidateCodeScreen() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleValidateCode = () => {
    // code to send password reset email
    navigation.navigate(REGISTRATION_PATH); // TODO: create reset password screen
  };

  const handleCodeChange = (value: string, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key >= "0" && event.nativeEvent.key <= "9") {
      handleCodeChange(event.nativeEvent.key, index);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please check your email</Text>
      <Text style={styles.subheader}>We've sent a code to your email.</Text>
      <View style={styles.codeContainer}>
        <TextInput
          style={styles.codeInput}
          ref={(ref) => (inputRefs.current[0] = ref)}
          maxLength={1}
          keyboardType="numeric"
          onKeyPress={(event) => handleKeyPress(event, 0)}
          value={code[0]}
        />
        <TextInput
          style={styles.codeInput}
          ref={(ref) => (inputRefs.current[1] = ref)}
          maxLength={1}
          keyboardType="numeric"
          value={code[1]}
          onKeyPress={(event) => handleKeyPress(event, 1)}
        />
        <TextInput
          style={styles.codeInput}
          ref={(ref) => (inputRefs.current[2] = ref)}
          maxLength={1}
          keyboardType="numeric"
          value={code[2]}
          onKeyPress={(event) => handleKeyPress(event, 2)}
        />
        <TextInput
          style={styles.codeInput}
          ref={(ref) => (inputRefs.current[3] = ref)}
          maxLength={1}
          keyboardType="numeric"
          value={code[3]}
          onKeyPress={(event) => handleKeyPress(event, 3)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleValidateCode}>
        <Text style={styles.buttonText}>Validate Code</Text>
      </TouchableOpacity>
    </View>
  );
}
