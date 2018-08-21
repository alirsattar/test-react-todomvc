import React, { Component } from 'react';
import TodoItem from '../components/todoItem';
import ReactDOM from 'react-dom';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      inputFieldValue: '',
      todos: [],
      currentTodo: {}
    };
  }
  componentDidUpdate() {
    this.nameInput.focus();
  }
  onInput = e => {
    this.setState({
      currentTodo: { content: e.target.value, completed: false },
      inputFieldValue: e.target.value
    });
  };
  addTodo = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    this.setState({
      todos: todosCopy,
      currentTodo: { content: '', completed: false },
      inputFieldValue: ''
    });
  };
  destroyTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({ todos: todosCopy });
  };
  markComplete = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy[i].completed
      ? (todosCopy[i].completed = false)
      : (todosCopy[i].completed = true);
    this.setState({ todos: todosCopy });
    console.log(todosCopy[i].completed);
  };
  render() {
    console.log(this.state.todos);
    let todosListed = this.state.todos.map((e, i) => {
      return (
        <TodoItem
          key={e.content}
          todo={e}
          delete={() => this.destroyTodo(i)}
          complete={() => this.markComplete(i)}
        />
      );
    });
    return (
      <div className="container my-5">
        <div className="mx-auto todo-list mx-auto">
          <div className="col-12 mx-auto">
            <input
              ref={input => {
                this.nameInput = input;
              }}
              placeholder="Enter New Todo Item"
              value={this.state.inputFieldValue}
              onChange={this.onInput}
            />
            <button onClick={this.addTodo}>+</button>
            <br />
          </div>
          <br />
          <div className="col-12">
            <ul>{todosListed}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;