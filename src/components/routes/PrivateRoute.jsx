import React from "react";

//packages
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    //fetching userdata[token] from local storage
    const userData = localStorage.getItem("user_data");

    return userData ? children : <Navigate to={"/login"} />;
}

export default PrivateRoute;
