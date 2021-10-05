import React, {useState} from 'react'; 

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