import React from "react";
import { Link } from "react-router-dom";

function YourList() {
  return (
    <React.Fragment>
      <h3>ToCLEAN</h3>
      <p>Create your own list! Add a title and then make a list.</p> <br />
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

export default YourList;
