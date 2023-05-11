import React, { useContext, useEffect, useRef } from "react";

//css
import "./footer.css";

//mode context
import { ModeContext, useMode } from "../../context/ModeContext";
import { useLocation } from "react-router-dom";

function Footer() {
    const { whiteMode } = useMode();
    const location = useLocation();
    const footerRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth < 480) {
            if (location.pathname === "/login") {
                if (footerRef.current) {
                    footerRef.current.style.display = "none";
                }
            }
        }
    }, [location.pathname]);
    return (
        <footer
            ref={footerRef}
            className={whiteMode && "white-mode"}
        >
            <div className="wrapper">
                <h2>Questions? Call 1-844-505-2993</h2>
                <ul>
                    <li className="first">
                        <span className="link">FAQ</span>
                        <span className="link">Cookie Preferences</span>
                        <div className="language-box">
                            <span className="globe-box">
                                <img
                                    src={require("../../assets/images/language.svg").default}
                                    alt="globe"
                                />
                            </span>
                            <span className="language">English</span>
                            <span className="down-arrow">
                                <img
                                    src={require("../../assets/images/down-arrow.svg").default}
                                    alt="down-arrow"
                                />
                            </span>
                        </div>
                    </li>
                    <li className="second">
                        <span className="link">Help Center</span>
                        <span className="link">Corporate Information</span>
                    </li>
                    <li className="third">
                        <span className="link">Terms of Use</span>
                        <span className="link">Privacy</span>
                    </li>
                    <li className="logos">
                        <span className="social-icon">
                            <img
                                src={require("../../assets/images/facebook.svg").default}
                                alt="social-icon"
                            />
                        </span>
                        <span className="social-icon">
                            <img
                                src={require("../../assets/images/instagram.svg").default}
                                alt="social-icon"
                            />
                        </span>
                        <span className="social-icon">
                            <img
                                src={require("../../assets/images/twitter.svg").default}
                                alt="social-icon"
                            />
                        </span>
                        <span className="social-icon">
                            <img
                                src={require("../../assets/images/youtube.svg").default}
                                alt="social-icon"
                            />
                        </span>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
