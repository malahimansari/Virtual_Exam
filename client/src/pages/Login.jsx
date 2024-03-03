import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import styles from "../styles/signup.module.css";
import Navbar from "../components/common/Navbar/main";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [wrongPassEntered, setWrongPassEntered] = useState(false);

  const inputHandler = (e) => {
    setUser((prevUser) => ({ ...user, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${VITE_API_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log(response);

      if (response.ok) {
        setUser({
          email: "",
          password: "",
        });
        navigate("/dashboard");
        const data = await response.json();
        storeTokenInLS(data.token);
      } else {
        setWrongPassEntered(!wrongPassEntered);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigator = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <form id={styles.form} onSubmit={(event) => handleSubmit(event)}>
          <button className={styles.btnBack} onClick={navigator}>
            Back
          </button>
          <h1>Login</h1>
          <label htmlFor="email">Enter your email address</label>
          <br />
          <input
            name="email"
            type="email"
            placeholder="name@example.com"
            onChange={inputHandler}
          />
          <br />
          <label htmlFor="password">Enter your password</label>
          <br />
          <p
            style={{
              display: wrongPassEntered ? "block" : "none",
              color: "red",
            }}
          >
            Wrong Credentials
          </p>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={inputHandler}
          />
          <br />

          <button className={styles.btnSubmit} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
