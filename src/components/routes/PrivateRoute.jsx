import React from "react";

//packages
import { Navigate, Outlet } from "react-router-dom";

//custom hooks
import useLocalStorage from "../../hooks/useLocalStorage";

function PrivateRoute({ children }) {
    //fetching userdata[token] from local storage
    const { getlocalStorage } = useLocalStorage();
    const userData = getlocalStorage("user_data");

    return userData ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoute;
