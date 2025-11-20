import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

function ProtectedRoute({ children, allowedRoles }) {
  const user = auth.currentUser;
  const role = localStorage.getItem('role');

  if (!user) return <Navigate to="/" />;
  if (allowedRoles && !allowedRoles.includes(role)) return <Navigate to="/" />;

  return children;
}

export default ProtectedRoute;