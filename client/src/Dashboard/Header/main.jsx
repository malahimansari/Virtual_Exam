import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
function Header({ OpenSidebar }) {
  const nav = useNavigate();
  const { user, isLoggedIN } = useAuth();
  const navigateToCreateTest = () => {
    if (user && isLoggedIN) {
      nav("/createtest");
    }
  };
  const navigateToCreateRoom = () => {
    nav("/createroom");
  };
  const backbutton = () => {
    nav("/");
  };
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>

      <div className="header-left">
        <BsSearch className="icon" />
      </div>

      <div className="header-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
        <button className="create-test-button" onClick={navigateToCreateTest}>
          Create Test
        </button>
        <button className="create-room-button" onClick={navigateToCreateRoom}>
          Create Room
        </button>
        <button className="take-test-button" onClick={backbutton}>
          Back to Home
        </button>
      </div>
    </header>
  );
}

export default Header;
