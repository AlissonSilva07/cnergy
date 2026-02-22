import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import React, { forwardRef } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";

interface AppInputProps extends TextInputProps {
  label: string;
  isFocused: boolean;
}

export const AppInput = forwardRef<TextInput, AppInputProps>(
  ({ label, isFocused, ...rest }, ref) => {
    const getInputBorderColor = () => {
      if (isFocused) {
        return appColors.tertiary;
      }

      return appColors.border;
    };

    return (
      <View style={styles.container}>
        <Text
          style={[textStyles.smallBold, { color: appColors.textSecondary }]}
        >
          {label}
        </Text>
        <TextInput
          ref={ref}
          style={[
            styles.input,
            {
              borderWidth: isFocused ? 1.5 : 1,
              borderColor: getInputBorderColor(),
            },
          ]}
          placeholderTextColor={appColors.textSecondary}
          {...rest}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: appMeasurements.sm,
  },
  input: {
    width: "100%",
    borderRadius: appMeasurements.sm,
    borderStyle: "solid",
    padding: 16,
    fontSize: 16,
    fontFamily: "Google Sans",
    color: appColors.textPrimary,
  },
});
