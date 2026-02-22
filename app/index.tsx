import { AuthLayout } from "@/components/layout/auth-layout";
import { AppButton } from "@/components/ui/app-button";
import { OnboardingCard } from "@/components/ui/onboarding-card";
import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <AuthLayout>
      <View style={styles.container}>
        <View style={styles.topText}>
          <Text style={textStyles.title}>cnergy</Text>
          <Text style={textStyles.titleSmall}>
            Alcance a sinergia necessária para manter a casa sob controle
          </Text>
          <Text style={textStyles.default}>Comece hoje mesmo.</Text>
        </View>
        <ScrollView
          horizontal
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
        >
          <OnboardingCard emoji="🙋‍♀️" text="Convide amigos" />
          <OnboardingCard emoji="🎯" text="Estabeleca tarefas" />
          <OnboardingCard emoji="✅" text="Conclua tarefas" />
        </ScrollView>
        <View style={styles.buttonArea}>
          <AppButton
            title="Fazer Login"
            onPress={() => router.navigate("/login")}
          />
          <Text
            style={[textStyles.default, { color: appColors.textSecondary }]}
          >
            Novo no cnergy?{" "}
            <Text
              style={[textStyles.default, { color: appColors.textPrimary }]}
            >
              Crie uma conta
            </Text>
          </Text>
        </View>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: appMeasurements.xxl,
    flexDirection: "column",
    gap: appMeasurements.md,
  },
  topText: {
    flexDirection: "column",
    gap: appMeasurements.md,
    paddingHorizontal: appMeasurements.md,
  },
  scroll: {
    maxHeight: 180,
  },
  scrollContent: {
    paddingHorizontal: appMeasurements.md,
    gap: appMeasurements.md,
  },
  buttonArea: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: appMeasurements.md,
    paddingHorizontal: 16,
  },
});
