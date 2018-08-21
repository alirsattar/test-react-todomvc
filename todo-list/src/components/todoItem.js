import React, { Component } from 'react';

class TodoItem extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <li>{this.props.todo}</li>
          <button onClick={this.props.delete}>Delete</button>
          <input type="checkbox" onClick={this.props.markComplete} />
        </div>
      </div>
    );
  }
}

export default TodoItem;
