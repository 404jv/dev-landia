import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { api } from "../services/api";

interface AuthContextProps {
  children: ReactNode;
}

type User = {
  name: string;
  email: string;
};

interface AuthResponse {
  user: User;
  token: string;
}

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  userData: User | null;
  userToken: string | null;
};

const USER_STORAGE = "@devlandia:user";
const TOKEN_STORAGE = "@devlandia:token";

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthContextProps): JSX.Element {
  const [userData, setUserData] = useState<User | null>(null);
  const [userToken, setUserToken] = useState<string | null>(null);

  async function signIn(email: string, password: string): Promise<void> {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data as AuthResponse;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
      await AsyncStorage.setItem(TOKEN_STORAGE, token);
      setUserData(user);
      setUserToken(token);
    } catch (error) {
      const errorMessage = error.response.status;
      if (errorMessage === 401) {
        Alert.alert("Email ou senha incorretos");
      }
    }
  }

  async function signOut(): Promise<void> {
    await AsyncStorage.removeItem(USER_STORAGE);
    await AsyncStorage.removeItem(TOKEN_STORAGE);
    setUserData(null);
    setUserToken(null);
  }

  useEffect(() => {
    async function loadStorage(): Promise<void> {
      const localUser = await AsyncStorage.getItem(USER_STORAGE);
      const localToken = await AsyncStorage.getItem(TOKEN_STORAGE);

      if (localUser && localToken) {
        setUserData(JSON.parse(localUser));
        setUserToken(JSON.parse(localToken));
        api.defaults.headers.common.Authorization = `Bearer ${localToken}`;
      }
    }

    loadStorage();
  }, []);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        signIn,
        signOut,
        userData,
        userToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };
