import React from "react";
import Task from "./Task";

function TaskList({tasks , onDelete}) {
  return (
    <div className="tasks">
       <ul>
        {tasks.map((task, index) => ( 
          <Task key={index} task={task} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
