import React, { useEffect } from "react";
import { useMode } from "../../context/ModeContext";

function Input({ formData, handleDataChange, errors, type, name, ref }) {
    const { whiteMode } = useMode();

    //auto-focusing first input
    useEffect(() => {
        ref?.current.focus();
    }, [ref]);

    return (
        <div className="input-container">
            <input
                ref={ref}
                id={name}
                name={name}
                value={formData?.name}
                type={type}
                onChange={handleDataChange}
                placeholder={name.split(/(?=[A-Z])/).join(" ")}
                className={whiteMode && "white-mode"}
            />
            <span className="error-message">{errors}</span>
        </div>
    );
}

export default Input;
