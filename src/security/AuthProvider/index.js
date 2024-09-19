import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const logar = (returnedtoken) => setToken(returnedtoken);
    const logout = () => setToken(null);


    return (
        <AuthContext.Provider value={{ token, logar, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de ium Authprovider");
    }
    return context;
};