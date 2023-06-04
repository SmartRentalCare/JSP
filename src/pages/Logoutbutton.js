import React, { useState } from "react";
import axios from "axios";

export default function LogoutButton() {
  const [message, setMessage] = useState("");

  const handleLogout = () => {
    axios
      .post("http://localhost:3001/logout", {
        headers: {
          "Content-Type": "application/json",
          Authortization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        localStorage.removeItem("token");
      })
      .catch((error) => {
        console.log("로그아웃 중 에러:", error);
      });
  };
  return (
    <div className="logout">
      <button onclick={handleLogout}>로그아웃</button>
      <p>{message}</p>
    </div>
  );
}
