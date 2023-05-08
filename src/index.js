import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MovieProvider } from "./context/MovieContext";
import { ModeProvider } from "./context/ModeContext";
import { AuthPrrovider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthPrrovider>
            <ModeProvider>
                <MovieProvider>
                    <App />
                </MovieProvider>
            </ModeProvider>
        </AuthPrrovider>
    </React.StrictMode>
);

reportWebVitals();
