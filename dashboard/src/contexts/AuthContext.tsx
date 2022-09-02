import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface User {
  name: string;
  email: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  user: User;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const isAuthenticated = user.email ? true : false;

  useEffect(() => {
    const { 'dashboard-devlandia.token': token } = parseCookies();
    
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    if(token) {
      api.get("users/profile").then(response => {
        const { email, name } = response.data;
        setUser({ email, name });
      }).catch((err) => {
        signOut();
      })
    }
  }, []);

  function signOut() {
    console.log('out')
    destroyCookie(undefined, 'dashboard-devlandia.token');
    
    Router.push('/');
  }

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post('/sessions', {
      email,
      password 
    });

    const { user, token } = response.data;

    setUser(user);

    setCookie(undefined, 'dashboard-devlandia.token', token, {
      maxAge: 60 * 60 * 24, // 1 dia
      path: '/'
    });

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    Router.push('/maps/create');
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}