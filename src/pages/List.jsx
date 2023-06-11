import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";

export default function List() {
  const [posts, setPosts] = useState([]);

  {
    /*const posts = [
    { id: 1, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
    { id: 13, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
    { id: 2, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
    { id: 3, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
    { id: 4, user: "김채영", carNum: "101허 1234", rentDay: "20220202" },
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

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(9);
  const pageSize = 9;
  const indexOfLastItem = currentPage * totalPages;
  const indexOfFirstItem = indexOfLastItem - totalPages;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/main?page=${currentPage}&limit=${pageSize}`
        );
        setPosts(response.data);
        setTotalPages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [currentPage]);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const fetchTotalPostsCount = async () => {
      try {
        const response = await axios.get("http://localhost:3001/list/count");
        const totalPostsCount = response.data;
        const totalPages = Math.ceil(totalPostsCount / pageSize);
        setTotalPages(totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTotalPostsCount();
  }, [pageSize]);

  return (
    <div>
      <div className="card_list">
        <div className="card">
          {currentItems &&
            currentItems.map((post) => (
              <div key={post.id} className="item item_1">
                <div className="info">
                  <p>{post.user}</p>
                  {/*고객이름*/}
                  <p>{post.carNum}</p>
                  {/*차량번호*/}
                  <p>{post.rentDay}</p>
                  {/*차량 빌린 날짜*/}
                </div>
              </div>
            ))}
        </div>
        <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous Page
          </button>
          <button
            onClick={handleNextPage}
            disabled={indexOfLastItem >= posts.length}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}
