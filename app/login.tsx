import { AuthLayout } from "@/components/layout/auth-layout";
import { AppButton } from "@/components/ui/app-button";
import { AppInput } from "@/components/ui/app-input";
import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const [email, setEmail] = useState<string>("");
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

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
          ref={emailRef}
          value={email}
          onChangeText={(value: string) => setEmail(value)}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          label="Email"
          isFocused={isEmailFocused}
          placeholder="Digite seu email"
          keyboardType="email-address"
          returnKeyType="next"
          submitBehavior="newline"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <AppInput
          ref={passwordRef}
          value={password}
          onChangeText={(value: string) => setPassword(value)}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          label="Senha"
          isFocused={isPasswordFocused}
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
            onPress={() => router.navigate("/(tabs)")}
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
