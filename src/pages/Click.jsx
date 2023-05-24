import React from "react";
import { Link } from "react-router-dom";

export default function Click() {
  return (
    <Link to="/client">
      <p className="submittext">고객등록</p>
    </Link>
  );
}
