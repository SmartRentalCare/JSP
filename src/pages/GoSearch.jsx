import React from "react";
import { Link } from "react-router-dom";

export default function GoSearch() {
  return (
    <Link to="/modal">
      <p className="submittext">고객정보검색</p>
    </Link>
  );
}
