import React, { Component } from 'react';
import Todos from './Components/Todos';
import Header from './Components/Layout/Header';
import AddTodo from './Components/AddTodo';

import './App.css';



class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Wash dishes',
        completed: false
      },
      {
        id: 3,
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
      id: 7,
      title: "finish this app!",
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }


  render() {
    return (
      <div className="App">
      <div className="container">        <header className="App-header">
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
