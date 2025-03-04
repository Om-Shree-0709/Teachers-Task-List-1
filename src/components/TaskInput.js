import React, { useState } from "react";
import "../styles/TaskInput.css";

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  // Handles adding a task when Enter is pressed or button is clicked
  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={input}
        onChange={({ target: { value } }) => setInput(value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        placeholder="Add a task"
        aria-label="Task input field"
        className="task-input"
      />
      <button
        onClick={handleAddTask}
        className="add-task-button"
        aria-label="Add task"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
