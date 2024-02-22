import React, { useState } from "react";
import Navbar from "../components/common/Navbar/main";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("127.0.0.1:262/api/auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(response);
  };
  return (
    <>
      <Navbar />
      <form onSubmit={(event) => handleSubmit}>
        <label htmlFor="username">Enter your name</label>
        <br />
        <input
          name="username"
          type="text"
          placeholder="username"
          onChange={inputHandler}
        />
        <br />
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
        <label htmlFor="role">Your Role</label>
        <br />
        <input
          type="radio"
          name="role"
          value="Student"
          onChange={inputHandler}
        />{" "}
        Student
        <br />
        <input
          type="radio"
          name="role"
          value="Teacher"
          onChange={inputHandler}
        />{" "}
        Teacher
        <br />
        <input
          type="radio"
          name="role"
          value="Both"
          onChange={inputHandler}
        />{" "}
        Both of them
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default SignUp;
