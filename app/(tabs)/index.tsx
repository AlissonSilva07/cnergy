import { MainLayout } from "@/components/layout/main-layout";
import { AppTabs } from "@/components/ui/app-tabs";
import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function IndexScreen() {
  const insets = useSafeAreaInsets();
  return (
    <MainLayout>
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <View style={styles.header}>
          <Text style={textStyles.display}>Home</Text>
          <Pressable>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={appColors.primary}
            />
          </Pressable>
        </View>

        <AppTabs />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    height: 56,
    width: "100%",
    paddingHorizontal: appMeasurements.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
