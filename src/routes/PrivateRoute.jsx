import { useContext } from "react";
import {AuthContext} from "../Provider/AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)
    if(loader){
        return ("I am coming....")
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;