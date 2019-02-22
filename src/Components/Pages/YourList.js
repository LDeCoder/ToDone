import React from "react";
import { Link } from "react-router-dom";

function YourList() {
  return (
    <div classname="YourListStyle" style={{backgroundColor: 'rgb(242, 151, 14)',  color: 'rgb(3, 79, 79)'}}>
    <React.Fragment>
      {/* <h3>YOUR LIST</h3>
      <p>Create your own list! Give it a title and then make your list.</p> <br /> */}
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
      <h3>YOUR LIST</h3>
      <p>Create your own list! Give it a title and then make your list.</p> <br />

    </React.Fragment>
    </div>
  );
}

const linkStyle = {
  color: " white",
  textDecoration: "none"
};

export default YourList;
