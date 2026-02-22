import { AuthLayout } from "@/components/layout/auth-layout";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <AuthLayout>
      <View style={styles.container}>
        <Text style={styles.text}>This is a modal</Text>
      </View>
      <StatusBar style="dark" animated />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontFamily: "DM Serif Display",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
