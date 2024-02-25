import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { useAuth } from "../../../store/auth";

function Navbar() {
  const { isLoggedIN } = useAuth();
  const navigateTo = useAuth();
  const navigatorHome = () => {
    navigateTo("/");
  };
  return (
    <>
      <header>
        <nav>
          <div className={styles.container}>
            <div className={styles.logo} onClick={navigatorHome}>
              <i className="bi bi-backpack2-fill"></i> Quizify
            </div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              {isLoggedIN ? (
                <>
                <li>
                  <Link to="/logOut">LogOut</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/signup">SignUp</Link>
                  </li>
                  <li>
                    <Link to="/login">LogIn</Link>
                  </li>
                </>
              )}
            </ul>
            <button id={styles.btn}>
              <i className="bi bi-list-nested"></i>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
