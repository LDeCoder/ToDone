import React from "react";
import { Link } from "react-router-dom";

function ToVacay() {
  return (
    <React.Fragment>
      <h3>ToVACAY</h3>
      <p>Let's make a list to go on Vacation!</p> <br />
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
  color: " rgb(10, 05, 75)",
  textDecoration: "none"
};

export default ToVacay;
