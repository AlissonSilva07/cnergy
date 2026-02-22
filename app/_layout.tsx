import { appColors } from "@/constants/colors";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Google Sans": require("@/assets/fonts/google-sans.ttf"),
    "DM Serif Display": require("@/assets/fonts/dm-sans.ttf"),
  });

  if (!loaded) return <ActivityIndicator color={appColors.secondary} />;

  return <Slot />;
}
