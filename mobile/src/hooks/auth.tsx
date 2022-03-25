import React, { createContext, useContext, ReactNode, } from 'react';



interface AuthContextProps {
    children: ReactNode;
}

type AuthContextData = {
    signIn: () => Promise<void>,
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthContextProps) {

    async function signIn() {
        console.log('Função de Login 😁');
    }


    return (
        <AuthContext.Provider value={{
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth() {
    const context = useContext(AuthContext);

    return context
}

export { useAuth, AuthProvider };