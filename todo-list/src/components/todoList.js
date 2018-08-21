import React, { Component } from 'react';
import TodoItem from './todoItem';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ''
    };
  }
  onInput = e => {
    this.setState({ currentTodo: e.target.value });
  };
  addTodo = () => {
    let todosCopy = this.state.todos.slice();
    // todosCopy.currentTodo.complete = false;
    todosCopy.push(this.state.currentTodo);
    this.setState({ todos: todosCopy, currentTodo: '' });
  };
  destroyTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({ todos: todosCopy });
  };
  markComplete = i => {
    let todosCopy = this.todos.slice();
    todosCopy[i].complete = true;
  };
  render() {
    let todosListed = this.state.todos.map((e, i) => {
      return <TodoItem key={e} todo={e} delete={() => this.destroyTodo(i)} />;
    });
    return (
      <div>
        <input
          placeholder="Enter New Todo Item"
          value={this.state.currentTodo}
          onChange={this.onInput}
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>{todosListed}</ul>
      </div>
    );
  }
}

export default TodoList;
