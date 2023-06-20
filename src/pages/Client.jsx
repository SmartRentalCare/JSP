import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";

export default function Client() {
  const [user, setUser] = useState("");
  const [carNum, setCarNum] = useState("");

  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/client", {
        user,
        carNum,
        date,
      });
      console.log("입력완료", response.data);
      window.alert("입력이 완료되었습니다.");
    } catch (error) {
      console.error(error);
    }
    setCarNum("");
    setDate("");
    setUser("");
  };

  return (
    <div>
      <div className="main_header">
        <Header />
      </div>

      <div className="main">
        <div className="main_section">
          <div className="search_box">
            <h1 className="subtitle">고객정보입력</h1>

            <form onSubmit={handleSubmit} className="client_input">
              <div className="client_element">
                <div className="input_client">
                  <input
                    type="text"
                    value={user}
                    className="client_name"
                    placeholder="이름"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <div className="input_client">
                  <input
                    type="text"
                    value={carNum}
                    className="car_number"
                    placeholder="차량번호"
                    onChange={(e) => setCarNum(e.target.value)}
                  />
                </div>

                <div className="input_client">
                  <input
                    type="text"
                    value={date}
                    className="date_use"
                    placeholder="계약날짜(YYYYMMDD)"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <p className="warningtext">*형식에 맞게 작성해주세요*</p>
              </div>
              <div className="client_button">
                <button type="submit" className="client_submit">
                  등록
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
