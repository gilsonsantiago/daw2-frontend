import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from '../AuthProvider';

const ProtecterRouter = ({ element }) => {

    const { token } = useAuth();

    return token ? element : element;

}

export default ProtecterRouter;