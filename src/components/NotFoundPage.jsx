import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>This page doesn't exit</h2>
      <Link to={"/"}>
      <button>Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
