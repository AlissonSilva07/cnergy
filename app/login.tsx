import { AuthLayout } from "@/components/layout/auth-layout";
import { AppButton } from "@/components/ui/app-button";
import { AppInput } from "@/components/ui/app-input";
import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <AuthLayout
      topBar={{
        title: "Login",
        navigationButton: {
          icon: (
            <Ionicons name="close" size={24} color={appColors.background} />
          ),
          action: () => router.back(),
        },
      }}
    >
      <View style={styles.container}>
        <Text style={textStyles.titleSmall}>Vamos preparar a sua conta</Text>
        <AppInput
          label="Usuário"
          isFocused={true}
          placeholder="Digite seu usuário"
        />
        <AppInput
          label="Senha"
          isFocused={false}
          placeholder="Digite sua senha"
        />
        <View style={styles.buttonsArea}>
          <AppButton title="Entrar" onPress={() => router.navigate("/login")} />
          <Text
            style={[textStyles.default, { color: appColors.textSecondary }]}
          >
            Não possui uma conta?{" "}
            <Text
              style={[textStyles.default, { color: appColors.textPrimary }]}
            >
              Crie uma aqui
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
    padding: appMeasurements.md,
    flexDirection: "column",
    gap: appMeasurements.md,
    backgroundColor: appColors.background,
  },
  buttonsArea: {
    flexDirection: "column",
    gap: appMeasurements.md,
    alignItems: "center",
  },
});
