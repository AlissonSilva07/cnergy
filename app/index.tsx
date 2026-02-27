import { AuthLayout } from "@/components/layout/auth-layout";
import { AppButton } from "@/components/ui/app-button";
import { OnboardingCard } from "@/components/ui/onboarding-card";
import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function IndexScreen() {
  const insets = useSafeAreaInsets();
  return (
    <AuthLayout>
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <View style={styles.topText}>
          <Text style={textStyles.title}>cnergy</Text>
          <Text style={textStyles.titleSmall}>
            Alcance a sinergia necessária para ter dias melhores
          </Text>
          <Text style={textStyles.default}>Comece hoje mesmo.</Text>
        </View>
        <ScrollView
          horizontal
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
        >
          <OnboardingCard emoji="🙋‍♀️" text="Convide amigos para o app" />
          <OnboardingCard emoji="✍🏻" text="Compartilhe coisas boas" />
          <OnboardingCard emoji="💡" text="Ilumine suas ideias" />
        </ScrollView>
        <View style={styles.spacer} />
        <View style={styles.interactionArea}>
          <View style={styles.buttonsArea}>
            <AppButton
              title="Fazer Login"
              onPress={() => router.navigate("/login")}
            />
            <AppButton
              title="Entrar como visitante"
              onPress={() => router.navigate("/login")}
              variant="muted"
            />
          </View>
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
  spacer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: appMeasurements.md,
    gap: appMeasurements.md,
  },
  interactionArea: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: appMeasurements.md,
    paddingHorizontal: 16,
  },
  buttonsArea: {
    width: "100%",
    flexDirection: "column",
    gap: appMeasurements.sm,
  },
});
