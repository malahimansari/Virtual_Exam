import React from 'react'
import { BrowserRouter ,Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import { useAuth } from '../store/auth'
const DashboardRoute = () => {
  const {user, isLoggedIN} = useAuth();
  const navigator = useNavigate();
  if (user && isLoggedIN) {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
    </BrowserRouter>
  )
  }
  else {
    navigator('/');
  }
}

export default DashboardRoute;