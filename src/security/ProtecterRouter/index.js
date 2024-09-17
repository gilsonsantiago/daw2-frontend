import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from '../AuthProvider';

const ProtecterRouter = ({ element }) => {

    const { isAuthenticated } = useAuth();

    return isAuthenticated ? element : < Navigate to="/" />;
}

export default ProtecterRouter;