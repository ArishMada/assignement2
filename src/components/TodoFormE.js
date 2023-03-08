import React, { useState, useEffect, useRef } from "react";

function TodoFormE(props) {
  const [input, setInput] = useState(""); //input of the form
  

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus() //allow to start in typing position ready to input
  })

  const handleInput = e => {
    setInput(e.target.value)
  }


  const [id, setId] = useState(0);
  const giveId=()=>{
      setId(id + 1)
      return id;
  }

  const handleSubmit = e => { 
    e.preventDefault(); //function to stop the refresh when button clicked

    props.onSubmit({
            id: giveId(),
            text:input
        });
         setInput("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Edit Task"
        value={input}
        name="text"
        className="task-input"
        onChange={handleInput}
        ref={inputRef}
      />
      <button className="task-button">EDIT</button>
    </form>
  );
}

export default TodoFormE;
