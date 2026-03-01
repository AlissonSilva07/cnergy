import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import React from "react";
import {
  ActivityIndicator,
  ColorValue,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from "react-native";

export type AppButtonVariant = "default" | "muted" | "disabled" | "loading";

interface ButtonColors {
  bg?: ColorValue;
  text?: ColorValue;
  stroke?: ColorValue;
}

interface AppButtonProps extends PressableProps {
  title: string;
  variant?: AppButtonVariant;
}

export function AppButton({
  title,
  variant = "default",
  ...rest
}: AppButtonProps) {
  const getButtonColors = () => {
    let colors: ButtonColors = {};

    switch (variant) {
      case "default":
        colors = {
          bg: appColors.secondary,
          text: appColors.background,
        };
        break;
      case "muted":
        colors = {
          bg: appColors.background,
          text: appColors.textPrimary,
          stroke: appColors.border,
        };
        break;
      case "disabled":
        colors = {
          bg: appColors.textSecondary,
          text: appColors.background,
        };
        break;
      case "loading":
        colors = {
          bg: appColors.textSecondary,
          text: appColors.background,
        };
        break;
      default:
        colors = {
          bg: appColors.primary,
          text: appColors.background,
        };
        break;
    }

    return colors;
  };

  return (
    <Pressable
      {...rest}
      style={[
        styles.container,
        {
          backgroundColor: getButtonColors().bg,
          borderWidth: 1,
          borderColor:
            variant === "muted"
              ? getButtonColors().stroke
              : getButtonColors().bg,
        },
      ]}
    >
      {variant === "loading" && (
        <ActivityIndicator size={16} color={getButtonColors().text} />
      )}
      <Text style={[textStyles.defaultBold, { color: getButtonColors().text }]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: appMeasurements.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: appMeasurements.sm,
    borderRadius: 100,
  },
});
