import { AuthLayout } from "@/components/layout/auth-layout";
import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function LoginScreen() {
  return (
    <AuthLayout
      topBar={{
        title: "Login",
        navigationButton: {
          icon: (
            <Ionicons name="close" size={24} color={appColors.background} />
          ),
          action: () => router.back(),
        },
      }}
    >
      <View style={styles.container}></View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: appMeasurements.xxl,
    flexDirection: "column",
    gap: appMeasurements.md,
    backgroundColor: appColors.background,
  },
});
