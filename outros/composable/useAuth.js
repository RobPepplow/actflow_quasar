import { ref } from "vue";
import {
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getAuth
} from "firebase/auth";


const auth = getAuth();
const isAuthenticated = ref(false);

const user = ref("");

const useAuth = () => {
  const login = async (email, password) => {
    const credentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (credentials.user) {
      isAuthenticated.value = true;
      user.value = credentials.user.email;
    }
  };

  const signup = async (email, password) => {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (credentials.user) {
      isAuthenticated.value = true;
      user.value = credentials.user.email;
    }
  };

  const logout = async () => {
    await signOut(auth);
    isAuthenticated.value = false;
    user.value = "";
  };

  return { isAuthenticated, login, signup, logout, user };
};

export default useAuth;
