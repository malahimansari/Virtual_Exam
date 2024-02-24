import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    // role: "",
  });

  const inputHandler = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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

      const data = await response.json();
      if (response.ok) {
        setUser({
          name: "",
          email: "",
          password: "",
        });
        navigate("/logIn");

        storeTokenInLS(data.token);
      } else if (data.errors) {
        alert(data.errors[0].msg);
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label htmlFor="username">Enter your name</label>
        <br />
        <input
          name="name"
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
        {/* <br />
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
        <br /> */}
        <p>
          Already signed up,<Link to={"/logIn"}>LogIn</Link>
        </p>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default SignUp;
