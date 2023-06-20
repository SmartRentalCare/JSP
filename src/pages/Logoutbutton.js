//zximport React, { useState } from "react";
import axios from "axios";

export default function LogoutButton() {
  const handleLogout = () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8081/auth/logout", { token })
      .then((response) => {
        console.log(token);
        console.log(response.data);
        localStorage.removeItem("token");
        window.location.href = "/auth/sign/in";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="logout">
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
