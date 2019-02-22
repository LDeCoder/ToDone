import React from "react";
import { Link } from "react-router-dom";

function ToVacay() {
  return (
    <div classname="VacayStyle" style={{backgroundColor: "tan", color: 'teal'}}>
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
      <h3>VACAY</h3>
      <p>Let's make a list to go on Vacation!</p> <br />
    </React.Fragment>
    </div>
  );
}

const linkStyle = {
  color: " white",
  textDecoration: "none"
};

export default ToVacay;
