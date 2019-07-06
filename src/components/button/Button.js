import React from 'react';

import './style.css';

const Button = props => {
  const {className, type, onClick, text} = props;

  return (
    <button
      className={className}
      type={type}      
      onClick={onClick}
    >
      {text}
    </button>

  );
  
}

export default Button;