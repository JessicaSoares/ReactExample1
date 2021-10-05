import React from 'react';

import "./Task.css"

const Task = ({task, handleTaskClick}) => {
    return <div className="task-container">{task.title}</div>;
};
 
export default Task;
