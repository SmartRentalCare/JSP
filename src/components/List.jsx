import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";

export default function List() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/list/carInfo")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>선택</th>
          <th>회원이름</th>
          <th>차량번호</th>
        </tr>
      </thead>
      <tbody>
        {/*리스트 예시*/}
        <tr>
          <td>
            <input type="checkbox"></input>
          </td>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox"></input>
          </td>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox"></input>
          </td>
          <td>1</td>
          <td>2</td>
        </tr>
        {posts.map((post) => {
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <div key={post.user}>
              <td>{post.user}</td>
              <td>{post.carInfo}</td>
            </div>
          </tr>;
        })}
      </tbody>
    </table>
  );
}
