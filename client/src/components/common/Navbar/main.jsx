import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { useAuth } from "../../../store/auth";

function Navbar() {
  const { isLoggedIN } = useAuth();
  return (
    <>
      <header>
        <nav>
          <div className={styles.container}>
            <div className={styles.logo}>
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
                <li>
                  <Link to="/logOut">LogOut</Link>
                </li>
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
