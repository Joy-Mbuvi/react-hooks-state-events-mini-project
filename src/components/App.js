import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS as initialTasks } from "../data";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filterTasksByCategory = (category) => {
    if (category === "All") {
      setTasks(initialTasks); 
    } else {
      const filteredTasks = initialTasks.filter(task => task.category === category);
      setTasks(filteredTasks);
    }
  };

  const addTask = (newTask) => {
    newTask.id = tasks.length + 1;
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={filterTasksByCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
