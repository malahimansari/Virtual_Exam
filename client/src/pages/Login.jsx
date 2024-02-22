import React, { useState } from "react";
import Navbar from "../components/common/Navbar/main";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setUser((prevUser) => ({ ...user, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:8080/api/v1/users/register_user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    console.log(response);
  };
  return (
    <>
      <Navbar />
      <form onSubmit={(event) => handleSubmit}>
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
          type="text"
          placeholder="**********"
          onChange={inputHandler}
        />
        <br />

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Login;
