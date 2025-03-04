import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Add a new task with a unique ID using Date.now()
  const addTask = (text) => {
    if (text.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: text.trim(), done: false },
      ]);
    }
  };

  // Toggle the "done" state of a task identified by its unique id
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  // Remove a task by filtering it out using its unique id
  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Reset all tasks to "not done" with a 1-second delay between each reset
  const resetTasks = () => {
    tasks.forEach((task, index) => {
      setTimeout(() => {
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t.id === task.id ? { ...t, done: false } : t))
        );
      }, index * 1000);
    });
  };

  // If all tasks are marked as done, trigger the reset
  if (tasks.length > 0 && tasks.every((task) => task.done)) {
    resetTasks();
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Task Manager</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </div>
  );
};

export default App;
