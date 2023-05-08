import React from "react";

//css
import "./global.css";
import "./variables.css";

//packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//component
import LandingPage from "./components/landing-page/LandingPage";
import Movies from "./components/movies/Movies";
import Login from "./components/login-page/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/*"
                    element={<LandingPage />}
                />
            </Routes>
        </Router>
    );
}

export default App;
