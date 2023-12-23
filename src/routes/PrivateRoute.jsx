import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const isAuth = false;

  return isAuth ? children : <Navigate to="/login" state={{ from: location }} replace />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
