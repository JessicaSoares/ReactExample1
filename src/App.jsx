import React, {useState} from 'react'; 
import {v4 as uuidv4} from "uuid";

import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

const App = () => {

    const [tasks, setTasks] = useState([
      {
        id: "1",
        title: "Estudar programacao",
        completed: false,
      },
      {
        id: "2",
        title: "Ler sd",
        comleted: true,
      },
    ]);

    const handleTaskAddition = (taskTitle) => { 
      const newTasks = [
        ... tasks, 
        { 
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        },
       ];

       setTasks(newTasks);

    };

    const handleTaskDelete = (taskId) => { 
      const newTasks = tasks.filter(task => task.id !== taskId);
      setTasks(newTasks);

    };

    const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
        if(task.id === taskId) return {...task, completed: !task.completed }
        return task;
      });
      setTasks(newTasks);
    };

    
    return (
    <Router>
    <div>
        <div className="container">
          <Header />
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDelete={handleTaskDelete} 
                />
        </div>
        </div>
      </Router>
    );
  };

export default App;