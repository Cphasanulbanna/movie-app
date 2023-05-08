import { createContext, useState } from "react";

export const modeContext = createContext();

export const ModeProvider = ({ children }) => {
    //states
    const [whiteMode, setWhiteMode] = useState(false);
    return (
        <modeContext.Provider value={{ whiteMode, setWhiteMode }}>{children}</modeContext.Provider>
    );
};
