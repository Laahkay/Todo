import React, { useState } from "react";
import Task from "./component/Task";

import "./App.css";

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const addTask = () => {
    setTaskList([...taskList, { task: taskName }]);
    setTaskName("");
  };
  const handleDelete = ({ id }) => {
    setTaskName(taskName.filter((todo) => todo.id !== id));
  };
  const remove = (i) => {
    if (typeof i === "number" && i >= 0 && i < list.length) {
      setList([...list.slice(0, i), ...list.slice(i + 1)]);
    }
  };

  return (
    <div className="container App">
      <h1>Todo List</h1>
      <label>Task Name</label>
      <input
        type="text"
        id="task"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <button onClick={addTask}>Add</button>
      <Button
        danger
        sm
        shadow
        onClick={(e) => {
          remove(i);
        }}
        className="btn-remove"
      >
        &times;
      </Button>
      <button onClick={() => handleDelete(todo)}> Delete</button>
      {taskList.map((task) => {
        return <Task taskName={task.task} />;
      })}
    </div>
  );
}

export default App;
