import {
    FirebaseAuthTypes,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from "@react-native-firebase/auth";
import { LoginInput } from "../../login/interfaces/login.interface";

interface IAuthService {
  login: (params: LoginInput) => Promise<FirebaseAuthTypes.User>;
  logOut: () => void;
}

const authService: IAuthService = {
  async login(params: LoginInput): Promise<FirebaseAuthTypes.User> {
    const response = await signInWithEmailAndPassword(
      getAuth(),
      params.email,
      params.password,
    );
    return response.user;
  },

  async logOut() {
    await signOut(getAuth());
  },
};

export { authService };

