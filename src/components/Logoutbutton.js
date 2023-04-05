import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const logout = async () => {
    try {
      const response = await fetch("/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        navigate("/auth/login");
      } else {
        throw new Error("로그아웃 실패");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate;
  return <button onClick={logout}>Logout</button>;
};
export default LogoutButton;
