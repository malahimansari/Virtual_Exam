import React from "react";

const Login = () => {
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
    const response = await fetch("127.0.0.1:262/api/auth/signIn", {
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
