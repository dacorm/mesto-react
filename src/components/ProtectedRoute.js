import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ Component, isLoggedIn, ...props }) => {
    return isLoggedIn ? (
        <Component {...props} />
    ) : (
        <Navigate to="/sign-in" />
    );
};

export default ProtectedRoute;