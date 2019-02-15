import React, { Component } from 'react';
import Todos from './Components/Todos';
import Header from './Components/Layout/Header';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';

import './App.css';



class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Wash dishes',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'CODE CODE CODE',
        completed: false
      }

    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed =! todo.completed
      }
      return todo;
    }) });
}      

  delTodo = (id) => {
   this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: "finish this app!",
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }


  render() {
    return (
      <div className="App">
      <div className="container">        <header className="App-header">
        <h3>This app brought to you by:</h3>
        <img
            className="App-Logo"
            src={require("./Images/LDeCoderLOGO.png")}
            width="auto"
            height="100%"
          />
                  <Header />
                  <AddTodo addTodo={this.addTodo} />
        </header>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
      </div>
    );
  }
}

export default App;
