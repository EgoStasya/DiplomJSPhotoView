import React, { Component } from 'react';

import { authenticationUrl }  from '../apiUnsplash/apiUnsplash';
import Header from '../components/header/Header';
import Button from '../components/button/Button';

import './style.css';

class Home extends Component {

  handleClick() {
    location.assign(authenticationUrl);
  }

  render() {
    return (
      <div className="container">
        <Header />        
        <main className="main-home">
          <div className="container-element">
            <Button
              className="btn-auth"
              type ="button"
              text="Authorization"        
              onClick={() => this.handleClick()}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;

