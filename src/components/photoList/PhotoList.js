import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import PhotoItem from '../photoItem/PhotoItem';

import './style.css';

const masonryOptions = {
  transitionDuration: '0.5s',  
  itemSelector: '.photo-item',
  columnWidth: '.photo-item',
  gutter: 15,
  fitWidth: true,
};

class PhotoList extends Component {
  
  render() {    
    const { photos } = this.props;

    return (
      <Masonry
        className={'photo-list'}
        options={masonryOptions}
      >
        {photos.map(photo =>
          <PhotoItem
            key={photo.id}        
            photo={photo}        
            id={photo.id}    
          />
        )}        
      </Masonry>  
    );

  }
}

export default PhotoList;