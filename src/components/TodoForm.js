import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(""); //input of the form  

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus() //allow to start in typing position ready to input
  })

  const handleInput = e => {
    setInput(e.target.value)
  }


  const handleSubmit = e => { 
    e.preventDefault(); //function to stop the refresh when button clicked

    props.onSubmit({
        id: Math.floor(Math.random() * 100000),
        text: input //giving a unique id to every input
    });

    setInput("")
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        name="text"
        className="task-input"
        onChange={handleInput}
        ref={inputRef}
      />
      <button className="task-button">TO DO</button>
    </form>
  );
}

export default TodoForm;
