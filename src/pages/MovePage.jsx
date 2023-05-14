import React from "react";
import { Link } from "react-router-dom";

export default function MovePage() {
  return (
    <Link to="/alarm">
      <p className="warningtext">실시간 경고알림을 확인</p>
    </Link>
  );
}
