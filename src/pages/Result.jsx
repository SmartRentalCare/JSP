import Modal from "./Modal";
import axios from "axios";
export default function Result() {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
  ];

  return (
    <div>
      {searchResult.length > 0 ? (
        <ul>
          {searchResult.map((post) => (
            <div key={post.id} className="searchKey">
              <div className="search_element">
                <p>{post.user}</p>
                <p>{post.carNum}</p>
                <p>{post.rentDay}</p>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </div>
  );
}
