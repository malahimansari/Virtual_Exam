import React from 'react'
import {useAuth} from "../store/auth";
import Dashboard from '../pages/Dashboard';
import { useNavigate } from 'react-router-dom';
const DashboardNavigate = () => {
  const {user, isLoggedIN} = useAuth();
  const nav = useNavigate();

  if (user && isLoggedIN) {
  return (
    <div>
        <Dashboard />
    </div>
  )
  }
  else {
    nav('/');
  }
}

export default DashboardNavigate