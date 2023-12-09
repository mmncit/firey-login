import * as React from "react";
import { AuthData, AuthError, HasChildrenProps } from "./AuthContext.types";
import auth from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = React.createContext<AuthData | null>(null);

export const useAuth = () => React.useContext(AuthContext);

export function AuthProvider({ children }: HasChildrenProps) {
  const [currentUserId, setCurrentUserId] = React.useState("");
  const [error, setError] = React.useState<AuthError>({
    code: null,
    message: "",
  });

  function signUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((_userCredential) => {
        // const user = _userCredential.user;
      })
      .catch((error) => {
        setError({
          code: error.code,
          message: error.message,
        });
      });
  }

  function resetUser() {
    setCurrentUserId("");
  }

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserId(user.uid);
      } else {
        // User is signed out
        setCurrentUserId("");
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUserId,
    resetUser,
    signUp,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
