import React from "react";
import { Link } from "react-router-dom";

export default function MovePage() {
  return (
    <Link to="/alarm">
      <p className="warningtext">누적현황</p>
    </Link>
  );
}
