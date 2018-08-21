import React, { Component } from 'react';
import TodoItem from '../components/todoItem';
import ReactDOM from 'react-dom';

class TodoList extends Component {
  constructor() {
    super();
    this.isHovered = this.isHovered.bind(this);
    this.state = {
      inputFieldValue: '',
      todos: [],
      currentTodo: {},
      isHovered: false
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
  };
  isCompleted = i => {
    let todosCopy = this.state.todos.slice();
    let classes = 'todo-item col-12 ';
    classes += todosCopy[i].completed ? 'completed' : 'not-completed';
    classes += this.state.isHovered ? ' destroy' : '';
    return classes;
  };
  isHovered = i => {
    this.setState({
      isHovered: !this.state.isHovered
    });
  };
  todosCompleted = () => {
    let countString = 0;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].completed) {
        countString++;
      }
    }
    let tasksNoun = countString === 1 ? ' todo completed' : ' todos completed';
    return `${countString} ${tasksNoun}`;
  };
  todosPending = () => {
    let countString = 0;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (!this.state.todos[i].completed) {
        countString++;
      }
    }
    let tasksNoun = countString === 1 ? ' todo pending' : ' todos pending';
    return `${countString} ${tasksNoun}`;
  };
  render() {
    let todosListed = this.state.todos.map((e, i) => {
      return (
        <TodoItem
          key={e.content}
          todo={e}
          delete={() => this.destroyTodo(i)}
          complete={() => this.markComplete(i)}
          completed={() => this.isCompleted(i)}
          hoverCheck={() => this.isHovered(i)}
        />
      );
    });
    return (
      <div className="container my-5 mx-auto">
        <div className="mx-auto todo-list">
          <div className="input-container col-12">
            <input
              ref={input => {
                this.nameInput = input;
              }}
              placeholder="Enter New Todo Item"
              value={this.state.inputFieldValue}
              onChange={this.onInput}
            />
            <button onClick={this.addTodo}>+</button>
            <span className="badge badge-success float-right">
              {this.todosCompleted()}
            </span>
            <span className="badge badge-warning float-right">
              {this.todosPending()}
            </span>
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
