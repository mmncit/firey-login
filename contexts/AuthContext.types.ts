export interface HasChildrenProps {
  children?: React.ReactNode;
}

export interface AuthData {
  signUp: (email: string, password: string) => void;
  currentUserId: string;
}

export interface AuthError {
  code: string;
  message: string;
}
