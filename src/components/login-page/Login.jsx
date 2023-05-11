import React, { useEffect, useRef, useState } from "react";

//css
import "./login.css";

//packages
import { useNavigate } from "react-router-dom";

//mode context
import { useMode } from "../../context/ModeContext";

import useLocalStorage from "../../hooks/useLocalStorage";
import { FormLayout } from "../layouts/form-layout/FormLayout";
import Input from "../reusable-form-elements/Input";
function Login() {
    //form fields state
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    //error message state
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    //login function
    const login = (e) => {
        e.preventDefault();

        const token = generateRandomToken();
        if (validateFields()) {
            setlocalStorage("user_data", token);
            navigate("/", { replace: true });
            return;
        }
    };

    const navigate = useNavigate();

    //userdata[token] from local storage
    const { setlocalStorage } = useLocalStorage();

    const { whiteMode } = useMode();

    //storing data into state
    const handleDataChange = (e) => {
        const value = e.target.value;
        const fieldName = e.target.name;
        setFormData({ ...formData, [fieldName]: value });
    };

    //generating random token while login
    const generateRandomToken = () => {
        const randomString1 = Math.random().toString(36).substring(7);
        const randomString2 = Math.random().toString(36).substring(7);
        const randomString3 = Math.random().toString(36).substring(7);
        if (formData?.email !== "" && formData?.password !== "") {
            return `${randomString1}${formData?.email}${randomString2}${formData?.password}${randomString3}`;
        }
    };

    //handling error messages
    const validateFields = () => {
        const fields = Object.keys(formData);
        const errorObjCopy = { ...errors };
        fields.map((field) => {
            if (formData[field] === "") {
                errorObjCopy[field] = `${field} is required`;
            } else {
                errorObjCopy[field] = "";
            }

            //checking if email is valid when field is not empty
            if (field === "email") {
                if (
                    formData[field] !== "" &&
                    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData[field])
                ) {
                    errorObjCopy[field] = "invalid email";
                }
            }

            if (field === "password") {
                if (formData[field] !== "") {
                    if (formData[field].length < 6) {
                        errorObjCopy[field] = "password must be atleast 6 digits";
                    }
                }
            }
        });

        setErrors(errorObjCopy);

        if (Object.values(errorObjCopy).some((error) => error !== "")) {
            return false;
        }
        return true;
    };

    const inputRef = useRef(null);

    //invoking login function while pressing enter key
    const handleKeyDown = (e) => {
        if (e.key === 13) {
            if (validateFields()) {
                login();
            }
        }
    };

    return (
        <FormLayout>
            <div className="top">
                <h1 className={whiteMode && "white-mode"}>Sign In</h1>
                <form
                    autoComplete="off"
                    onSubmit={login}
                    className="login-form"
                >
                    <Input
                        formData={formData}
                        handleDataChange={handleDataChange}
                        errors={errors.email}
                        type={"text"}
                        name="email"
                        inputRef={inputRef}
                        onKeyDown={handleKeyDown}
                    />
                    <Input
                        formData={formData}
                        handleDataChange={handleDataChange}
                        errors={errors.password}
                        type={"password"}
                        name="password"
                        onKeyDown={handleKeyDown}
                    />

                    <button
                        className={whiteMode && "white-mode"}
                        type="submit"
                    >
                        Sign In
                    </button>
                    <span className={`forgot-password ${whiteMode && "white-mode"}`}>
                        Forgot Pasword?
                    </span>
                </form>
            </div>
            <p className={whiteMode && "white-mode"}>
                New to Debug Media? <span className={whiteMode && "white-mode"}> Sign up now.</span>
            </p>
        </FormLayout>
    );
}

export default Login;
