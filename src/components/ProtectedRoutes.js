import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// const useAuth = ()=>{
//     const user = {loggedIn: false};
//     return user && user.loggedIn;
// }

const ProtectedRoute = () => {
    let auth = {'token':true}
    return(
        auth.token?<Outlet/> : <Navigate to={'/'}/>
    )
};

export default ProtectedRoute;