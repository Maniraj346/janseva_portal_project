import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

function ProtectedRoute({ children, allowedRoles }) {
  const user = auth.currentUser;
  const role = localStorage.getItem('role');

  if (!user) return <Navigate to="/" replace />;
  if (allowedRoles?.length && !allowedRoles.includes(role)) return <Navigate to="/" replace />;

  return children;
}

export default ProtectedRoute;