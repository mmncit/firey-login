import * as React from "react";
import { AuthData, HasChildrenProps } from "./AuthContext.types";
import auth from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = React.createContext<AuthData | null>(null);

export const useAuth = () => React.useContext(AuthContext);

export function AuthProvider({ children }: HasChildrenProps) {
  const [currentUserId, setCurrentUserId] = React.useState("");

  function signUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
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
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
