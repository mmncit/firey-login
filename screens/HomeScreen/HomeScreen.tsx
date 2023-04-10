import { View, Text, SafeAreaView } from "react-native";
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./HomeScreen.styles";
import Constants from "expo-constants";

export function HomeScreen() {
  const { appName } = Constants.expoConfig.extra;

  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.red}>{appName}</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    </SafeAreaView>
  );
}
