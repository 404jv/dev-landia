import React, { createContext, useContext, ReactNode } from "react";

interface AuthContextProps {
  children: ReactNode;
}

type AuthContextData = {
  signIn: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthContextProps): JSX.Element {
  async function signIn(): Promise<void> {
    console.log("Função de Login 😁");
  }

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        signIn,
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
