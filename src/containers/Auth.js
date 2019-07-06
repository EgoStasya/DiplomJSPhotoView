import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadPhoto } from '../actions/actionCreator';
import { setAccessTokenUnplash, listPhoto } from '../apiUnsplash/apiUnsplash';
import Header from '../components/header/Header';
import Button from '../components/button/Button';
import PhotoList from '../components/photoList/PhotoList';

import './style.css';


class Auth extends Component {
  constructor(props) {
    super(props);
    
    if (
      localStorage.getItem('token') === 'undefined' ||
      localStorage.getItem('token') === '' ||
      !localStorage.getItem('token')
    )
      this.setAccessToken();
  }

  componentDidMount() {

    const start = Number(localStorage.getItem('page'));    
 
    if (!start) {
      this.loadPhotos();
    }
   }

  loadPhotos() {
    let page = localStorage.getItem('page');
    let perPage = localStorage.getItem('perPage');

    const data = listPhoto(+page, +perPage, localStorage.getItem('token'));
    data.then(d => this.props.loadPhoto(d));
    localStorage.setItem('page', +page + 10);
  }

  setAccessToken() {
    const code = location.search.split('code=')[1];

    if (code) {
      setAccessTokenUnplash(code);
    }
  }  

  render() {
    const { photos } = this.props;

    return (
      <div className="container">
        <Header />        
        <main className="main-auth">
          <div className="container-element">
            <PhotoList 
              photos={photos}
            />           
            <Button
              className="btn-load-photo"
              type ="button"
              text="Load more..."
              onClick={ev => this.loadPhotos(ev)}
            />
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photoReducer
  };
}

const  mapDispatchToProps = dispatch => {
  return {
    loadPhoto: photos => dispatch(loadPhoto(photos))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

