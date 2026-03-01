import { appColors } from "@/constants/colors";
import useAuthStore from "@/features/auth/store/auth.store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Google Sans": require("@/assets/fonts/google-sans-regular.ttf"),
    "Google Sans Bold": require("@/assets/fonts/google-sans-bold.ttf"),
    "DM Serif Display": require("@/assets/fonts/dm-sans.ttf"),
  });

  const { user } = useAuthStore();

  if (!loaded) return <ActivityIndicator color={appColors.secondary} />;

  return (
    <Stack>
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={!user}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
