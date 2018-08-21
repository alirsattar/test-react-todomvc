import React, { Component } from 'react';
import './styles/App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import TodoItem from './components/todoItem';
import TodoList from './containers/todoList';

class App extends Component {
  render() {
    return <TodoList />;
  }
}

export default App;
