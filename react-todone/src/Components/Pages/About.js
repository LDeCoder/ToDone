import React from 'react'
import { Link } from 'react-router-dom';

function About() {
    return (
        <React.Fragment>
            <h3>ABOUT</h3>
            <p>This is an app that is waiting for some new functionality - check back - it's definitely going to be a WOW FACTOR!</p>  <br />
            <h1>Thanks for visiting!</h1>
            <div className = "link">
            <Link style={linkStyle} to="/">HOME</Link> | <Link style={linkStyle} to="/about"> ABOUT</Link>
            </div>
        </React.Fragment>
    )
}

const linkStyle = {
    color: ' rgb(3, 79, 79)',
    textDecoration: 'none', 
  }

export default About;