import React from "react";
import Navbar from "../components/common/Navbar/main";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

function Help() {
  const navigateTo = useNavigate();
  const { user } = useAuth();
  // Creating a function to navigate to home page for the constructing pages
  // You can change or modify the code down below
  const gobackHandler = function() {
    navigateTo('/');
  }
  return (
    <>
        <div>Help page in construction</div>
        <button onClick={gobackHandler}>Go Back</button>
    </>
  );
}

export default Help;
