import { MainLayout } from "@/components/layout/main-layout";
import { textStyles } from "@/constants/textStyles";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function ForYouTab() {
  const insets = useSafeAreaInsets();
  return (
    <MainLayout>
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <Text style={textStyles.default}>For you</Text>
      </View>
    </MainLayout>
  );
}

export { ForYouTab };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
