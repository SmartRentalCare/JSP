import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { FaCheck, FaRedoAlt } from "react-icons/fa";
import LogoutButton from "./Logoutbutton";
import axios from "axios";
import MovePage from "./MovePage";
import Click from "./Click";

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleReset = () => {
    setKeyword("");
    setSearchResult([]);
  };
  {
    /*}
  const posts = [
    { id: 1, user: "김채영", carNum: "101허1234", rentDay: "20220202" },
    { id: 13, user: "김채영", carNum: "101허1234", rentDay: "20220202" },
    { id: 2, user: "김채영", carNum: "101허1234", rentDay: "20220202" },
    { id: 3, user: "김채영", carNum: "101허1234", rentDay: "20220202" },
    { id: 4, user: "김채영", carNum: "101허1234", rentDay: "20220202" },
    { id: 5, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
    { id: 6, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
    { id: 7, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
    { id: 8, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
    { id: 9, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
    { id: 10, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
    { id: 11, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
    { id: 12, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
  ];*/
  }
  const handleSearch = async () => {
    try {
      await axios.post("http://localhost:3001/search", {
        keyword: keyword,
      });
      const response = await axios.get(
        `http://localhost:3001/search?keyword=${keyword}`
      );
      setPosts(response.data);
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
    }

    const filteredData = posts.filter((post) =>
      post.carNum.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearchResult(filteredData);
  };

  return (
    <div>
      <div className="main_header">
        <Header />
      </div>

      <div className="main">
        <div className="main_section">
          <div className="search_box">
            <h1 className="subtitle">차량검색</h1>
            <div className="input_box">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="차량번호(4자리)"
              />
              <button onClick={handleSearch}>
                <FaCheck className="search-icon" />
              </button>
              <button onClick={handleReset}>
                <FaRedoAlt className="search-icon" />
              </button>
            </div>
            <div>
              {searchResult.length > 0 ? (
                <table className="search_table">
                  <thead>
                    <tr className="search_names">
                      <th>사용자</th>
                      <th>차량번호</th>
                      <th>렌트날짜</th>
                    </tr>
                  </thead>

                  <tbody>
                    {searchResult.map((post) => (
                      <tr key={post.id} className="searchKey">
                        <td>{post.user}</td>
                        <td>{post.carNum}</td>
                        <td>{post.rentDay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>검색 결과가 없습니다.</div>
              )}
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
