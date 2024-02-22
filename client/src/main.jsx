import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Help from './pages/Help';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CreateTest from './pages/TestPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Help' element={<Help />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/SignUp' element={<SignUp />}></Route>
      
      <Route path='/Createtest' element={<CreateTest />}></Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
