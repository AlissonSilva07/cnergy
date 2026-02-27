import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

type AppTabBarProps = BottomTabBarProps & {
  insets: EdgeInsets;
};

const screenWidth = Dimensions.get("screen").width;

export const AppTabBar = ({
  state,
  descriptors,
  navigation,
  insets,
}: AppTabBarProps) => {
  const { buildHref } = useLinkBuilder();

  return (
    <View
      style={[
        styles.tabbar,
        { bottom: insets.bottom, marginHorizontal: screenWidth / 6 },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title;

        const isFocused = state.index === index;

        const iconName = route.name.toLowerCase();

        const icon = {
          index: (props: any) => (
            <Ionicons name="home-outline" size={20} {...props} />
          ),
          settings: (props: any) => (
            <Ionicons name="settings-outline" size={20} {...props} />
          ),
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabbarItem,
              {
                backgroundColor: isFocused
                  ? appColors.background
                  : appColors.surface,
              },
            ]}
          >
            {icon[iconName]({
              color: isFocused ? appColors.primary : appColors.textSecondary,
            })}
            <Text
              style={[
                textStyles.extraSmall,
                {
                  color: isFocused
                    ? appColors.primary
                    : appColors.textSecondary,
                },
              ]}
            >
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: appColors.surface,
    padding: appMeasurements.xs,
    borderRadius: 100,
    gap: appMeasurements.sm,
  },
  tabbarItem: {
    flex: 1,
    height: 48,
    paddingHorizontal: appMeasurements.md,
    justifyContent: "center",
    alignItems: "center",
    gap: appMeasurements.xs,
    borderRadius: 100,
  },
});
