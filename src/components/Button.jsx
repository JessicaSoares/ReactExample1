import React from 'react';

import "./Button.css";

const Button = ({children, onClick}) => {
    return (
        <button onclick={onClick} className="button">
            {children}
        </button>
      );
}
 
export default Button;