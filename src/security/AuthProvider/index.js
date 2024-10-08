import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
   
    return (
        <AuthContext.Provider value={{ token, setToken }}>
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