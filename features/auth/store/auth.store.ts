import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { create } from "zustand";

interface AuthStoreProps {
  user: FirebaseAuthTypes.User | null;
  loading: boolean;
  token: string | null;
  setUser: (user: FirebaseAuthTypes.User | null) => void;
  setLoading: (loading: boolean) => void;
  setToken: (token: string | null) => void;
}

const useAuthStore = create<AuthStoreProps>((set) => ({
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setLoading: (loading) => set({ loading }),
  user: null,
  token: null,
  loading: false,
}));

export default useAuthStore;
