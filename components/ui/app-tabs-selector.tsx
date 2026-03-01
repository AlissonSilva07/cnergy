import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AppTabsItem } from "./app-tabs";

interface AppTabsSelectorProps {
  item: AppTabsItem;
  isSelected: boolean;
  onSelect: (item: AppTabsItem) => void;
}

function AppTabsSelector({ item, isSelected, onSelect }: AppTabsSelectorProps) {
  return (
    <Pressable
      style={styles.tabSelectorItemActive}
      onPress={() => onSelect(item)}
    >
      <Text
        style={[
          textStyles.default,
          { color: isSelected ? appColors.secondary : appColors.textSecondary },
        ]}
      >
        {item.title}
      </Text>
      {isSelected && (
        <View
          style={[
            styles.tabSelectorItemIndicatorActive,
            {
              backgroundColor: isSelected
                ? appColors.secondary
                : appColors.textSecondary,
            },
          ]}
        />
      )}
    </Pressable>
  );
}

export { AppTabsSelector };

const styles = StyleSheet.create({
  tabSelectorItemActive: {
    padding: appMeasurements.md,
    position: "relative",
  },
  tabSelectorItemIndicatorActive: {
    height: 2,
    position: "absolute",
    bottom: 0,
    right: appMeasurements.lg,
    left: appMeasurements.lg,
  },
});
