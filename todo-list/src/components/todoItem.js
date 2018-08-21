import React, { Component } from 'react';

class TodoItem extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <span className="float-left">{this.props.todo.content}</span>
          <button onClick={this.props.delete}>Delete</button>
          <input
            className="float-right"
            type="checkbox"
            onClick={this.props.complete}
          />
        </div>
      </div>
    );
  }
}

export default TodoItem;
