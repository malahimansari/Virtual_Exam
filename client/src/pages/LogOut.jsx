import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const LogOut = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    logoutUser();
  }, [logoutUser]);
  return navigate("/login");
};
