import React, { Component } from 'react';
import { connect } from 'react-redux';

import { likePhoto, unLikePhoto } from '../apiUnsplash/apiUnsplash';
import { like, unlike } from '../actions/actionCreator';
import PhotoCard from '../components/photoCard/PhotoCard';

class DetailPhoto extends Component {  
    
  goBack() {
    this.props.history.goBack()
  }

  changeLikePhotoStatus() {        
    
    const { photos, match, likePhotoAction, unlikePhotoAction } = this.props;
    
    const photo = photos.find(photo => photo.id === match.params.id);        
    let status = photo.liked_by_user;

    if (!status) {
      likePhoto(photo.id, localStorage.getItem('token'));
      likePhotoAction(photo.id);
    } else {
      unLikePhoto(photo.id, localStorage.getItem('token'));
      unlikePhotoAction(photo.id);
    }
  }

  render() {

    const { photos, match} = this.props;   
    const photo = photos.find(photo => photo.id === match.params.id);

    return (
      <PhotoCard
        photo={photo}
        changeLikePhotoStatus={ev => this.changeLikePhotoStatus(ev)}
        goBack={ev => this.goBack(ev)}
      />
    );

  }
}

const mapStateToProps = state => {
  return {
    photos: state.photoReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    likePhotoAction: id => dispatch(like(id)),
    unlikePhotoAction: id => dispatch(unlike(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPhoto);