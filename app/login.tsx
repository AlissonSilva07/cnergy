import { AuthLayout } from "@/components/layout/auth-layout";
import { AppButton } from "@/components/ui/app-button";
import { AppInput } from "@/components/ui/app-input";
import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import { useLogin } from "@/features/login/hooks/useLogin";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useRef } from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const { email, password, isLoading, handleLogin } = useLogin();

  return (
    <AuthLayout
      topBar={{
        title: "Login",
        navigationButton: {
          icon: (
            <Ionicons name="chevron-back" size={24} color={appColors.primary} />
          ),
          action: () => router.back(),
        },
      }}
    >
      <View style={styles.container}>
        <Text style={textStyles.titleSmall}>Vamos preparar a sua conta</Text>
        <AppInput
          ref={emailRef}
          value={email.value}
          onChangeText={(value: string) => email.setValue(value)}
          onFocus={() => email.setFocused(true)}
          onBlur={() => email.setFocused(false)}
          label="Email"
          isFocused={email.isFocused}
          placeholder="Digite seu email"
          keyboardType="email-address"
          returnKeyType="next"
          submitBehavior="newline"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <AppInput
          ref={passwordRef}
          value={password.value}
          onChangeText={(value: string) => password.setValue(value)}
          onFocus={() => password.setFocused(true)}
          onBlur={() => password.setFocused(false)}
          label="Senha"
          isFocused={password.isFocused}
          placeholder="Digite sua senha"
          keyboardType="default"
          returnKeyType="done"
          submitBehavior="submit"
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          secureTextEntry={true}
        />
        <View style={styles.buttonsArea}>
          <AppButton
            title="Entrar"
            variant={isLoading ? "loading" : "default"}
            disabled={isLoading}
            onPress={handleLogin}
          />
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
