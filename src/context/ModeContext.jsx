import { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    //states
    const [whiteMode, setWhiteMode] = useState(false);
    return (
        <ModeContext.Provider value={{ whiteMode, setWhiteMode }}>{children}</ModeContext.Provider>
    );
};
