import React from "react";
import { useState } from "react";







const Form = (tasks) => {
  const { handleAddItem } = tasks;
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddItem({
      checked: false,
      id: (+new Date()).toString(),
      task,
    });

    setTask("");
    
  };

  
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="input">
          <input
            type="text"
            className="text"
            placeholder="Ingrese tarea..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btnAdd" disabled={task ? "" : "disabled"}>
            Agregar
          </button>
         
        </div>
      </div>
    </form>
  );
};

export default Form;
