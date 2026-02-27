import { AuthLayout } from "@/components/layout/auth-layout";
import { appMeasurements } from "@/constants/measurements";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function FavoritesScreen() {
  const insets = useSafeAreaInsets();
  return (
    <AuthLayout>
      <View style={[styles.container, { paddingBottom: insets.bottom }]}></View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: appMeasurements.md,
  },
});
