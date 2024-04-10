// @ts-nocheck
import { Navigate } from 'react-router-dom';
import { getUserData } from '../firebase/api';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const user = getUserData();
    const shouldRedirect = !user && !user?.emailVerified;
  
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };