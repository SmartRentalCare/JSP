import LoginPage from "./pages/LoginPage";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AlarmPage from "./pages/AlarmPage";
import Client from "./pages/Client";
import Modal from "./pages/Modal";
import CountPage from "./pages/CountPage";
import axios from "axios";
function App() {
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    // 페이지 로드 시 localStorage에서 토큰 가져오기
    const storedAccessToken = localStorage.getItem("token");
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  useEffect(() => {
    // 토큰이 변경될 때마다 localStorage에 저장
    localStorage.setItem("token", accessToken);
  }, [accessToken]);

  useEffect(() => {
    const interval = setInterval(() => {
      refreshToken();
    }, 60000); // 1분마다 토큰 재발급

    return () => {
      clearInterval(interval);
    };
  }, []);

  const refreshToken = async () => {
    try {
      // 서버에 토큰 재발급 요청 보내기
      const response = await axios.post("http://localhost:8081/revise_check", {
        token: localStorage.getItem("token"),
      });
      console.log(response.data);
      // 새로운 액세스 토큰 받아와서 저장
      setAccessToken(response.data);
    } catch (error) {
      // 토큰 재발급 요청 실패 처리
      console.error("토큰 재발급 요청 실패:", error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/main" element={<MainPage />} />
        <Route exact path="/auth/sign/in" element={<LoginPage />} />
        <Route exact path="/alarm" element={<AlarmPage />} />
        <Route exact path="/client" element={<Client />} />
        <Route exact path="/modal" element={<Modal />} />
        <Route exact path="/count" element={<CountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
