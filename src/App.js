import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/header';
import SignUp from './components/SignUp';
import Home from './components/Home';
import {Route, Routes} from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;