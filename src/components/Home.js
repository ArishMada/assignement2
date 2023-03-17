import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import TodoList from "./TodoList";
import Header from "./header";
import "../App.css";
import { useAuth, logout } from "../firebase";

const Home = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login")
    } catch {
      alert("Error!");
    }
  }

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="todo-app">
        <div>Currently logged in as: {currentUser?.email}</div>
        <TodoList />
      </div>
      <button onClick={handleLogout}>
                Logout
      </button>
      </div>
  );
};

export default Home;
