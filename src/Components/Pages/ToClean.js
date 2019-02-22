import React from "react";
import { Link } from "react-router-dom";

function ToClean() {
  return (
    <React.Fragment>
      <h3>ToCLEAN</h3>
      <p>This is a NEW LIST called To Clean!</p> <br />
      <div className="link">
        <Link style={linkStyle} to="/">
          HOME
        </Link>{" "}
        |
        <Link style={linkStyle} to="/clean">
          {" "}
          CLEAN
        </Link>{" "}
        |
        <Link style={linkStyle} to="/vacation">
          {" "}
          VACAY
        </Link>
        |
        <Link style={linkStyle} to="/yourlist">
          {" "}
          YOUR LIST
        </Link>
        |
        <Link style={linkStyle} to="/about">
          {" "}
          ABOUT
        </Link>{" "}
      </div>
    </React.Fragment>
  );
}

const linkStyle = {
  color: " rgb(22, 88, 6)",
  textDecoration: "none"
};

export default ToClean;
