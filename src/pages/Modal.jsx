import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { FaCheck, FaRedoAlt } from "react-icons/fa";

import axios from "axios";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 12;
  const totalPages = posts.length;

  const handleReset = () => {
    setKeyword("");
    setSearchResult([]);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/search?keyword=${keyword}&page=${currentPage}&limit=${pageSize}`
      );
      setPosts(response.data);
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
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
                  <div className="modal_button">
                    <button
                      className="PreviousPage"
                      onClick={handlePrevPage}
                      disabled={currentPage === 0}
                    >
                      <FaAngleLeft />
                    </button>
                    <button
                      className="NextPage"
                      onClick={handleNextPage}
                      disabled={totalPages < 6}
                    >
                      <FaAngleRight />
                    </button>
                  </div>
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
