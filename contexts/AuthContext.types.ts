export interface HasChildrenProps {
  children?: React.ReactNode;
}

export interface AuthData {
  signUp: (email: string, password: string) => void;
  resetUser: () => void;
  currentUserId: string;
  error: AuthError;
}

export interface AuthError {
  code: string;
  message: string;
}
