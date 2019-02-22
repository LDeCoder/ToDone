import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="AboutStyle" style={{
      backgroundColor: 'rgb(3, 79, 79)', 
      color: 'white',
      padding: '1em',
      }}>
    <React.Fragment>
    <h3>ABOUT</h3>
      <p>
        This is an app that is waiting for some new functionality - check back -
        it's definitely going to be a WOW FACTOR!
      </p>{" "}
      <br />
      <h1>Thanks for visiting!</h1>
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
      {/* <h3>ABOUT</h3>
      <p>
        This is an app that is waiting for some new functionality - check back -
        it's definitely going to be a WOW FACTOR!
      </p>{" "}
      <br />
      <h1>Thanks for visiting!</h1> */}
    </React.Fragment>
    </div>
  );
}

const linkStyle = {
  color: " rgb(242, 151, 14)",
  textDecoration: "none"
};

export default About;
