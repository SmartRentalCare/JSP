import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";

export default function List() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/search?page=${currentPage}&limit=10`) // 현재 페이지와 게시글 개수 제한
      .then((response) => {
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="card_list">
      <div className="card">
        <div class="item item_1">
          <div className="info">
            <p>김채영</p>
            <p>1234</p>
            <p>white</p>
            <p>2023.02.03</p>
          </div>
        </div>
        <div class="item item_1">
          <div className="info">
            <p>김채영</p>
            <p>1234</p>
            <p>white</p>
            <p>2023.02.03</p>
          </div>
        </div>
        <div class="item item_1">
          <div className="info">
            <p>김채영</p>
            <p>1234</p>
            <p>white</p>
            <p>2023.02.03</p>
          </div>
        </div>
        <div class="item item_1">
          <div className="info">
            <p>김채영</p>
            <p>1234</p>
            <p>white</p>
            <p>2023.02.03</p>
          </div>
        </div>
        <div class="item item_1">
          <div className="info">
            <p>김채영</p>
            <p>1234</p>
            <p>white</p>
            <p>2023.02.03</p>
          </div>
        </div>
        <div class="item item_1">
          <div className="info">
            <p>김채영</p>
            <p>1234</p>
            <p>white</p>
            <p>2023.02.03</p>
          </div>
        </div>
        <div class="item item_1">
          <div className="info">
            <p>김채영</p>
            <p>1234</p>
            <p>white</p>
            <p>2023.02.03</p>
          </div>
        </div>
        <div class="item item_1">
          <div className="info">
            <p>김채영</p>
            <p>1234</p>
            <p>white</p>
            <p>2023.02.03</p>
          </div>
        </div>
        <div class="item item_1">
          <div className="info">
            <p>김채영</p>
            <p>1234</p>
            <p>white</p>
            <p>2023.02.03</p>
          </div>
        </div>

        {posts.map((post) => {
          <div key={post.user} class="item item_1">
            <div className="info">
              <p>{post.user}</p>
              <p>{post.carNum}</p>
              <p>{post.carInfo}</p>
              <p>{post.date}</p>
            </div>
          </div>;
        })}
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          이전 페이지
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          다음 페이지
        </button>
      </div>
    </div>
  );
}
