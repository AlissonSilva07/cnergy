import { AuthLayout } from "@/components/layout/auth-layout";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <AuthLayout>
      <View style={styles.container}>
        <Text style={textStyles.title}>cnergy</Text>
        <Text style={textStyles.titleSmall}>
          Alcance a sinergia necessaria para manter a casa sob controle
        </Text>
        <Text style={textStyles.default}>Comece hoje mesmo.</Text>
      </View>
      <StatusBar style="dark" animated />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: appMeasurements.xxl,
    paddingHorizontal: appMeasurements.md,
    flexDirection: "column",
    gap: appMeasurements.md,
  },
  text: {
    fontFamily: "DM Serif Display",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
