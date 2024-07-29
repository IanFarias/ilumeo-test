import { createContext, ReactNode } from "react";
import { usePersistedState } from "../utils/usePersistedState";
import { USER_KEY } from "../constants/keys";
import { AuthData, useApi } from "../services/api/useApi";

interface AuthProviderProps {
  children: ReactNode;
}

export type User = {
  id: string;
  email: string;
  token: string;
};

interface AuthContextData {
  user: User | null;
  login: (data: AuthData) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = usePersistedState<User | null>(USER_KEY, null);

  const { auth } = useApi();

  const login = async (data: AuthData) => {
    const user = await auth(data);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
