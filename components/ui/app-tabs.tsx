import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { ReactNode, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { AppTabsSelector } from "./app-tabs-selector";

export interface AppTabsItem {
  key: string;
  title: string;
  tab: ReactNode;
}

interface AppTabsProps {
  items: AppTabsItem[];
}

function AppTabs({ items }: AppTabsProps) {
  const [selectedTab, setSelectedTab] = useState<AppTabsItem>(items[0]);

  if (!items || items.length === 0) return null;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.tabSelector}
        contentContainerStyle={styles.tabSelectorScroll}
      >
        {items.map((item) => (
          <AppTabsSelector
            key={item.key}
            item={item}
            isSelected={selectedTab === item}
            onSelect={(item: AppTabsItem) => setSelectedTab(item)}
          />
        ))}
      </ScrollView>
      <View style={styles.content}>{selectedTab.tab}</View>
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
    maxHeight: 56,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: appColors.border,
  },
  tabSelectorScroll: {
    paddingHorizontal: appMeasurements.md,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
});
