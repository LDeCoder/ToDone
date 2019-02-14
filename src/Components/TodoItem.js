import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
       return {
        textDecoration: this.props.todo.completed ?
        'line-through' : 'none',
        background: 'azure',
        padding: '10px',
        borderBottom: '10px #ccc dotted'
       }
        }


  render() {
      const { title, id } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind 
        (this, id)} /> {"   "}
        {title}
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
