import React, { useEffect, useRef, useState } from "react";

//css
import "./login.css";

//packages
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    //input states
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    //error-message state
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const inputRef = useRef(null);

    //userdata[token] from local storage
    const userData = localStorage.getItem("user_data");

    //storing name
    const handleNameChange = (e) => {
        const { value } = e.target;
        setName(value);
    };

    //storing password
    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPassword(value);
    };

    //generating random token while login
    const generateRandomToken = () => {
        const randomString1 = Math.random().toString(36).substring(7);
        const randomString2 = Math.random().toString(36).substring(7);
        const randomString3 = Math.random().toString(36).substring(7);
        if (name !== "" && password !== "") {
            return `${randomString1}${name}${randomString2}${password}${randomString3}`;
        }
    };

    //validating errors
    const validateError = () => {
        let error = "";
        if (!name && !password) {
            setErrorMsg("All fields are required");
            error = "All fields are required";
        } else if (!name) {
            setErrorMsg("Name is required");
            error = "Name is required";
        } else if (!password) {
            setErrorMsg("password is required");
            error = "password is required";
        } else if (password) {
            if (password.length < 6) {
                setErrorMsg("password must be atleast 6");
                error = "password must be atleast 6";
            }
        } else {
            setErrorMsg("");
            error = "";
        }

        setErrorMsg(error);
        return error;
    };

    //login function
    const login = (e) => {
        e.preventDefault();
        const error = validateError();
        const token = generateRandomToken();
        if (token && error === "") {
            localStorage.setItem("user_data", JSON.stringify(token));
            navigate("/");
        }
    };

    //invoking login function while pressing enter key
    const handleKeyDown = (e) => {
        if (e.key === 13) {
            if (name && password) {
                login();
            }
        }
    };

    useEffect(() => {
        if (userData) {
            navigate("/");
        }
    }, [location]);

    //auto-focusing first input
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="login-container">
            <div className="content">
                <div className="top">
                    <h1>Sign In</h1>
                    <form
                        onSubmit={login}
                        className="login-form"
                    >
                        <input
                            type="text"
                            placeholder="Email or phone number"
                            onChange={handleNameChange}
                            value={name}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                        />
                        <input
                            type="text"
                            placeholder="Password"
                            onChange={handlePasswordChange}
                            value={password}
                            onKeyDown={handleKeyDown}
                        />

                        <button type="submit">
                            Sign In
                            <p className="error">{errorMsg}</p>
                        </button>
                        <span className="forgot-password">Forgot Pasword?</span>
                    </form>
                </div>
                <p>
                    New to Debug Media? <span> Sign up now.</span>
                </p>
            </div>
        </div>
    );
}

export default Login;
