import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [value, setValue] = React.useState('fruit');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const addTask = (task) => {
    //function to add
    if (!task.text || /^\s*$/.test(task.text)) {
      //making sure that empty space doesn't get taken as an input
      return;
    }

    const newTasks = [task, ...tasks];

    setTasks(newTasks);
  };

  const updatedTask = (taskId, newInput) => {
    if (!newInput.text || /^\s*$/.test(newInput.text)) {
      //making sure that empty space doesn't get taken as an input
      return;
    }

    setTasks(prev => prev.map((item) => (item.id === taskId ? newInput : item)));
  };

  const completeTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    //function to delete
    const removeArray = [...tasks].filter((task) => task.id !== id);

    setTasks(removeArray);
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <TodoForm onSubmit={addTask} />
      <select value={value} onChange={handleChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incompleted">Incompleted</option>
        </select>
      <Todo tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updatedTask}/>
    </div>
  );
}

export default TodoList;
