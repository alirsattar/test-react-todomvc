import React, { Component } from 'react';

class TodoItem extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <li>{this.props.todo.content}</li>
          <button onClick={this.props.delete}>Delete</button>
          <input type="checkbox" onClick={this.props.complete} />
        </div>
      </div>
    );
  }
}

export default TodoItem;
