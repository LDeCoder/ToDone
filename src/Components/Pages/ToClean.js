import React from "react";
import { Link } from "react-router-dom";

function ToClean() {
  return (
    <div classname="CleanStyle" style={{backgroundColor: "darkgrey", color: 'teal'}}>
    <React.Fragment>
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
      <h3>CLEAN</h3>
      <p>This is a NEW LIST called To Clean!</p> <br />
    </React.Fragment>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none"
};

export default ToClean;
