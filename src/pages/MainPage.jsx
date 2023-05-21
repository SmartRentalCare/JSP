import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { FaCheck } from "react-icons/fa";
import LogoutButton from "./Logoutbutton";
import axios from "axios";
import List from "./List";

import MovePage from "./MovePage";
//import { useSelector } from "react-redux";
export default function MainPage() {
  //const userID = useSelector((state) => state.userID);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
                  {searchResult &&
                    searchResult.map((post) => (
                      <div key={post.id} className="searchKey">
                        <div className="search_element">
                          <p>{post.user}</p>
                          <p>{post.carInfo}</p>
                          <p>{post.smoke}</p>
                          <p>{post.drink}</p>
                          <p>{post.conflict}</p>
                        </div>
                      </div>
                    ))}
                </ul>
              ) : (
                <div>검색 결과가 없습니다.</div>
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
