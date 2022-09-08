import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { registerUser, loginUser, LoginProps, RegisterProps } from "../api";

type User = {
  displayName: string;
  email: string;
  photoURL: string;
};

type AuthenticationContext = {
  user: User | null;
  register: ({ email, password, dname, file }: RegisterProps) => void;
  login: ({ email, password }: LoginProps) => void;
  logout: () => void;
  loading: boolean;
  error: string;
};

const AuthContext = createContext<AuthenticationContext | undefined>(undefined);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: any) => {
      setUser(user);
    });

    return () => {
      unsub();
    };
  }, []);

  const login = async ({ email, password }: LoginProps) => {
    try {
      setLoading(true);
      await loginUser({ email, password });
    } catch (error) {
      setError("Something went wrong while login into your account.");
    } finally {
      setLoading(false);
    }
  };

  const register = async ({ email, password, dname, file }: RegisterProps) => {
    try {
      setLoading(true);
      await registerUser({ email, password, dname, file });
    } catch (error) {
      setError("Something went wrong while creating your account.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuthContext should be used in a <AuthProvider /> component"
    );
  }
  return context;
};

export const useLogin = () => {
  const { login, loading, error } = useAuthContext();
  return { login, loading, error };
};

export const useRegister = () => {
  const { register, loading, error } = useAuthContext();
  return { register, loading, error };
};

export const useLogout = () => {
  const { logout } = useAuthContext();
  return logout;
};

export const useMe = () => {
  const { user } = useAuthContext();
  return user;
};
