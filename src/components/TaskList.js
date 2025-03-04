import React from "react";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

const TaskList = ({ tasks, toggleTask, removeTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
