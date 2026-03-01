import { router } from "expo-router";
import { useState } from "react";
import { authService } from "../../auth/services/auth.service";
import useAuthStore from "../../auth/store/auth.store";

function useProfile() {
  const { setUser, setToken } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleLogout() {
    setIsLoading(true);
    try {
      authService.logOut();
      setUser(null);
      setToken(null);
      router.push("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    handleLogout,
  };
}

export { useProfile };

