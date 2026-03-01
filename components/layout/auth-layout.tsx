import { appColors } from "@/constants/colors";
import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppTopBar, AppTopBarProps } from "./top-bar";

interface AuthLayoutProps {
  topBar?: AppTopBarProps;
  children: ReactNode;
}

function AuthLayout({ topBar, children }: AuthLayoutProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          backgroundColor: appColors.background,
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
      <StatusBar style={"dark"} animated />
    </View>
  );
}

export { AuthLayout };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
