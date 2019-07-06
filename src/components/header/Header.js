import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Header = () => {  

  return (
    <header className="header">
      <div className="container-element">
        <Link to='/'>
          <h1>Photo<span className="title">View</span></h1>
        </Link>
        <p className="aphorism">Great photography is about depth of feeling, not depth of field</p>
      </div>
    </header>
  );
  
}

export default Header;