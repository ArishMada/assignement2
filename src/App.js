import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/header';

function App() {
  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
