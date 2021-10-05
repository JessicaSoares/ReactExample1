import React, {useState} from 'react'; 
import {v4 as uuidv4} from "uuid";
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
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
        ...tasks, 
        { 
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        },
       ];

       setTasks(newTasks);

    }

    return (
      <>
        <div className="container">
          <AddTask />
          <Tasks tasks={tasks} />
        </div>

      </>
    );
  };

export default App;