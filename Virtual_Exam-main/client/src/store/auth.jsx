import { useState, createContext, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIN = !!token;

  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT Authentication to get currently logged user data

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userAuthentication();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIN,
        storeTokenInLS,
        logoutUser,
        userAuthentication,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
