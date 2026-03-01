import { appColors } from "@/constants/colors";
import { textStyles } from "@/constants/textStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { JSX } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface AppTopBarButton {
  icon?: JSX.Element;
  action: () => void;
}

export interface AppTopBarProps {
  title: string;
  navigationButton?: AppTopBarButton;
  actions?: AppTopBarButton[];
}

const DefaultPlaceholderButton = () => (
  <Pressable style={styles.btnPadding}>
    <Ionicons name="chevron-back" size={24} color={appColors.background} />
  </Pressable>
);

function AppTopBar({ title, navigationButton, actions }: AppTopBarProps) {
  return (
    <View style={styles.container}>
      {navigationButton ? (
        <Pressable onPress={navigationButton.action} style={styles.btnPadding}>
          {navigationButton.icon && navigationButton.icon}
        </Pressable>
      ) : (
        <DefaultPlaceholderButton />
      )}
      <Text style={[textStyles.defaultBold, { color: appColors.primary }]}>
        {title}
      </Text>
      {actions && actions.length > 0 ? (
        <View style={styles.actionsContainer}>
          {actions.map((action, index) => (
            <Pressable key={index} onPress={action.action}>
              {action.icon && action.icon}
            </Pressable>
          ))}
        </View>
      ) : (
        <DefaultPlaceholderButton />
      )}
    </View>
  );
}

export { AppTopBar };

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    backgroundColor: appColors.background,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnPadding: {
    paddingHorizontal: 16,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingEnd: 16,
  },
});
