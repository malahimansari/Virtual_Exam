import "./App.css";
import Navbar from "./components/common/Navbar/main";
import Main from "./components/features/Main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Help from "./pages/Help";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { LogOut } from "./pages/LogOut.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Help" element={<Help />}></Route>
        <Route path="/LogIn" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/logOut" element={<LogOut />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
