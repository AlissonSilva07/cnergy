import { textStyles } from "@/constants/textStyles";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function ForYouTab() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Text style={textStyles.default}>For you</Text>
    </View>
  );
}

export { ForYouTab };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
