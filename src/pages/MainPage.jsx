import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { FaCheck } from "react-icons/fa";
import LogoutButton from "./Logoutbutton";
import axios from "axios";
import List from "./List";
import Modal from "./Modal";
import MovePage from "./MovePage";
//import { useSelector } from "react-redux";
export default function MainPage() {
  //const userID = useSelector((state) => state.userID);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:3001/search", {
        keyword: searchKeyword,
      });
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="main_header">
        <Header />
      </div>

      <div className="main">
        <div className="main_section">
          <div className="list">
            <List />
          </div>
          <div className="search_box">
            <h1 className="subtitle">차량관리</h1>
            <div className="input_box">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="차량번호(4자리)"
              />
              <button onClick={handleSearch}>
                <FaCheck className="search-icon" />
              </button>
              {searchResult.length > 0 ? (
                <ul>
                  {searchResult.map((item) => (
                    <li key={item.carNum} onClick={() => setSelectedItem(item)}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <div>검색 결과가 없습니다.</div>
              )}
              {selectedItem && (
                <Modal onClose={() => setSelectedItem(null)}>
                  <h2>{selectedItem.user}</h2>
                  <p>{selectedItem.carNum}</p>
                  <p>{selectedItem.carInfo}</p>
                  <p>{selectedItem.date}</p>
                  <p>{selectedItem.drink}</p>
                  <p>{selectedItem.smoke}</p>
                  <p>{selectedItem.boom}</p>
                </Modal>
              )}
            </div>
          </div>
        </div>

        <div className="main_article">
          <div className="users">
            <div className="users_name">
              <p className="name">react-redux님, 안녕하세요!</p>
            </div>
            <div className="logout">
              <LogoutButton />
            </div>
            <div className="move">
              <MovePage />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
