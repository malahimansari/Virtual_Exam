import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import styles from "../styles/signup.module.css";
const Login = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setUser((prevUser) => ({ ...user, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
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
        const data = await response.json();
        alert(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigator = () => {
    navigate("/");
  };
  return (
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
  );
};

export default Login;
