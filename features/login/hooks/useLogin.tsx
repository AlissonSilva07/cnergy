import { useState } from "react";
import { authService } from "../../auth/services/auth.service";
import useAuthStore from "../../auth/store/auth.store";

function useLogin() {
  const { setUser, setToken } = useAuthStore();

  const [email, setEmail] = useState<string>("");
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleLogin() {
    setIsLoading(true);
    try {
      const response = await authService.login({
        email,
        password,
      });

      setUser(response);
      setToken(response.uid);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    email: {
      value: email,
      setValue: setEmail,
      isFocused: isEmailFocused,
      setFocused: setIsEmailFocused,
    },
    password: {
      value: password,
      setValue: setPassword,
      isFocused: isPasswordFocused,
      setFocused: setIsPasswordFocused,
    },
    handleLogin,
  };
}

export { useLogin };

