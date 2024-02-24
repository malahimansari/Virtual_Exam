import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

const DashboardRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default DashboardRoute