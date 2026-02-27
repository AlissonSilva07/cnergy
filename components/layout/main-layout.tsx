import { appColors } from "@/constants/colors";
import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppTopBar, AppTopBarProps } from "./top-bar";

interface MainLayoutProps {
  topBar?: AppTopBarProps;
  children: ReactNode;
}

function MainLayout({ topBar, children }: MainLayoutProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          backgroundColor: topBar ? appColors.primary : appColors.background,
        },
      ]}
    >
      {topBar && (
        <AppTopBar
          title={topBar.title}
          navigationButton={topBar.navigationButton}
          actions={topBar.actions}
        />
      )}
      {children}
      <StatusBar style={topBar ? "light" : "dark"} animated />
    </View>
  );
}

export { MainLayout };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
