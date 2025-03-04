import React from "react";
import "../styles/TaskItem.css";

const TaskItem = ({ task, toggleTask, removeTask }) => {
  return (
    <li
      className={`task-item ${task.done ? "done" : ""}`}
      onClick={() => toggleTask(task.id)}
      role="button"
      tabIndex="0"
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && toggleTask(task.id)
      }
      aria-pressed={task.done}
    >
      <span>{task.text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent toggling when deleting
          removeTask(task.id);
        }}
        className="delete-task-button"
        aria-label={`Delete task: ${task.text}`}
      >
        ❌
      </button>
    </li>
  );
};

export default TaskItem;
