import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        // If no token is found, redirect to login page
        return <Navigate to="/login" replace />;
    }

    // If token is found, allow access to the route
    return children;
};

export default ProtectedRoute;
