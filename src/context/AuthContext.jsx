import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthPrrovider = ({ children }) => {
    //states
    const [auth, setAuth] = useState(false);

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
