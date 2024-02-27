import React from "react";
import { Link } from "react-router-dom";

function BasicErrorPage() {
  return (
    <div>
      <h1>How did we get here?</h1>
      <h2>Sorry something most have gone wrong...</h2>
      <Link to={"/"}>Back to the main page</Link>
    </div>
  );
}

export default BasicErrorPage;
