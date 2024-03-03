import "./App.css";
import Main from "./components/features/Main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { LogOut } from "./pages/LogOut";
import CreateTest from "./pages/TestPage";
import Dashboard from "./pages/Dashboard";
import { FormProvider } from "./context/FormProvider";
import Quiz from "./pages/Quiz";
import { CreateRoom } from "./pages/CreateRoom";

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/LogIn" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/logOut" element={<LogOut />}></Route>
          <Route path="/createtest" element={<CreateTest />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/createRoom" element={<CreateRoom />}></Route>
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;
