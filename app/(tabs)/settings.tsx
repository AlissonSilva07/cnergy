import { AuthLayout } from "@/components/layout/auth-layout";
import { appMeasurements } from "@/constants/measurements";
import { useProfile } from "@/features/profile/hooks/useProfile";
import { Button, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const { handleLogout, isLoading } = useProfile();

  return (
    <AuthLayout>
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <Button title="Sair" onPress={handleLogout} />
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: appMeasurements.md,
    alignItems: "center",
    justifyContent: "center",
  },
});
