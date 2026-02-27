import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import { StyleSheet, Text, View } from "react-native";

function AppTabs() {
  return (
    <View style={styles.container}>
      <View style={styles.tabSelector}>
        <View style={styles.tabSelectorItem}>
          <Text style={textStyles.default}>Pra você</Text>
          <View style={styles.tabSelectorItemIndicator} />
        </View>
      </View>
    </View>
  );
}

export { AppTabs };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  tabSelector: {
    height: 56,
    width: "100%",
    paddingHorizontal: appMeasurements.md,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: appColors.border,
  },
  tabSelectorItem: {
    width: 180,
    padding: appMeasurements.md,
    position: "relative",
  },
  tabSelectorItemIndicator: {
    height: 2,
    width: 60,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: appColors.primary,
  },
});
