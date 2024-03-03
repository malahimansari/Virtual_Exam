import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { useAuth } from "../../../store/auth";

function Navbar() {
  const { isLoggedIN } = useAuth();
  const navigateTo = useNavigate();

  const navigatorHome = () => {
    navigateTo("/");
  };

  return (
    <>
      <header>
        <nav>
          <div className={styles.container}>
            <div
              className={`${styles.logo} ${styles.toggle}`}
              onClick={navigatorHome}
            >
              <i className="bi bi-backpack2-fill"></i> Quizify
            </div>
            <ul>
              <li>
                <Link to="/about" className={styles.link}>
                  Docs <i className="bi bi-journal-text"></i>{" "}
                </Link>
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
                    <Link to="/signup" className={styles.link}>
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className={styles.link}>
                      Login <i className="bi bi-box-arrow-in-right"></i>
                    </Link>
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
