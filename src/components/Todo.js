import React, { useState } from "react";
import TodoFormE from "./TodoFormE";
import { CgCloseO } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

function Todo({ tasks, completeTask, removeTask, updateTask}) {
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

  if(update.id) {
    return <TodoFormE edit={update} onSubmit={SubmitUpdate} />;
  }
  return tasks.map((task, index) => (
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
