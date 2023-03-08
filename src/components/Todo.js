import React, { useState } from "react";
import TodoFormE from "./TodoFormE";
import { CgCloseO } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

function Todo({ tasks, completeTask, removeTask, updateTask, value}) {
  const [update, setUpdate] = useState({
    id: null,
    value: "",
  });

  const SubmitUpdate = value => {
    updateTask(update.id, value)
    setUpdate({
        id: null,
        value: ''
    })
  }

  function filter(completed, filteringValue){ //filter the values depending on completed or not
    if(filteringValue == "all"){
       return true
    } else if(filteringValue == "completed"){
        if(completed)
          return true
    } else if (filteringValue == "active"){
        if(!completed)
          return true
    } else {
      return true
    }
  }

  if(update.id) {
    return <TodoFormE edit={update} onSubmit={SubmitUpdate} />;
  }
  return tasks.map((task, index) => (
    filter(task.isComplete, value) == true && //check if the task is completed or not
    <div
      className={task.isComplete ? "task-row complete" : "task-row"}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <div className="icon">
        <CgCloseO onClick={() => removeTask(task.id)} className="delete-icon" />
        <FiEdit
          onClick={() => setUpdate({ id: task.id, value: task.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
