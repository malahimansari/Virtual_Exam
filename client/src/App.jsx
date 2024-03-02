import "./App.css";
import Navbar from "./components/common/Navbar/main";
import Main from "./components/features/Main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { LogOut } from "./pages/LogOut";
import CreateTest from "./pages/TestPage";
import Dashboard from "./pages/Dashboard";
import GeneratedForm from "./pages/GeneratedForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/LogIn" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/logOut" element={<LogOut />}></Route>
        <Route path="/createtest" element={<CreateTest />} />
        <Route path="/your_quiz" element={<GeneratedForm />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
