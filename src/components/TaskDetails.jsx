import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './TaskDetails.css';
import Button from "./Button";
const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick  = () => {
        history.goBack();
    }

    console.log(params);

    return (
    
    <div>
        <div className = "back-button-container">
            <Button>Voltar</Button>
        </div>

        <div className = "task-details-container">
            <h2>{params.taskTitle} </h2>
            <p> Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet lorem </p>
        </div>

    </div>
    );
};
 
export default TaskDetails;