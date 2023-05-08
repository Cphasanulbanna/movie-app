import React, { useContext } from "react";

//css
import "./header.css";

//packages
import { useNavigate } from "react-router-dom";

//mode context
import { modeContext } from "../../context/ModeContext";

function Header() {
    const { whiteMode, setWhiteMode } = useContext(modeContext);

    const navigate = useNavigate();

    //switchinf DARK/LIGHT mode
    const toggleMode = () => {
        setWhiteMode((prev) => !prev);
    };

    //logout function
    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <header>
            <div className="logo-box">
                <div className="logo-image">
                    <img
                        src={require("../../assets/images/logo.svg").default}
                        alt="logo"
                    />
                </div>
                <h1 className="logo-text">DebugMedia</h1>
            </div>

            <div className="right">
                <button
                    className={`mode ${whiteMode && "white-mode"}`}
                    onClick={toggleMode}
                >
                    Light
                </button>
                <button
                    onClick={logout}
                    className="logout"
                >
                    <span>Logout</span>
                    <span className="profile">
                        <img
                            src={require("../../assets/images/profile.svg").default}
                            alt="profile"
                        />
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Header;
