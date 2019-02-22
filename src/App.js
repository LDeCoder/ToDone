import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todos from "./Components/Todos";
import Header from "./Components/Layout/Header";
import AddTodo from "./Components/AddTodo";
import About from "./Components/Pages/About";
import ToClean from "./Components/Pages/ToClean";
import ToVacay from "./Components/Pages/ToVacay";
import YourList from "./Components/Pages/YourList";
// import uuid from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8081/")
      .then(res => this.setState({ todos: res.data }));
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    axios
      .delete(`http://localhost:8081/${id}`)
      .then(res =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      );
  };

  addTodo = title => {
    axios
      .post("http://localhost:8081/", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <header className="App-header">
              <h3>This app brought to you by:</h3>
              <img
                className="App-Logo"
                src={require("./Images/LDeCoderLOGO.png")}
                width="auto"
                height="100%"
                alt="null"
              />
              <Header />
              <AddTodo addTodo={this.addTodo} />
            </header>
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
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
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/clean" component={ToClean} />
            <Route path="/vacation" component={ToVacay} />
            <Route path="/yourlist" component={YourList} />
          </div>
        </div>
      </Router>
    );
  }
}

const linkStyle = {
  color: " rgb(3, 79, 79)",
  textDecoration: "none"
};

export default App;
