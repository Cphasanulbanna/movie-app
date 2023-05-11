import React from "react";

//css
import "./landing-page.css";

//packages
import { Route, Routes } from "react-router-dom";

//components
import Header from "../header/Header";
import Movies from "../movies/Movies";
import Footer from "../footer/Footer";
import Login from "../login-page/Login";
import PrivateRoute from "../routes/PrivateRoute";

function LandingPage() {
    return (
        <>
            <section id="landing-page">
                <Header />
                <Routes>
                    <Route element={<PrivateRoute />}>
                        <Route
                            path="/"
                            element={<Movies />}
                        />
                    </Route>
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                </Routes>
                <Footer />
            </section>
        </>
    );
}

export default LandingPage;
