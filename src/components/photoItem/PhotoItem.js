import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const PhotoItem = props => {

  const { photo, id } = props;

  const userProfile = photo.user.links.html;
  const userProfileShort = userProfile.slice(21);
  const photoCreated = photo.created_at;  
  const photoCreatedShot = (new Date(photoCreated)).toLocaleDateString(); 

  return (
    <div className="photo-item">
      <Link to={`/photo/${id}`}>
        <img
          className="photo-img-small"
          src={photo.urls.small} 
          alt="photo"
        />
      </Link>
      <div className="clearfix">
        <span className="photo-author">{photo.user.name}</span>
        <span className={photo.liked_by_user ? 'photo-likes-red' : 'photo-likes-grey'}>{photo.likes} Likes</span>
      </div>        
      <p className="photo-link">
        <a href={photo.user.links.html}>{userProfileShort}</a>
      </p>
      <p className="photo-date">{photoCreatedShot}</p>      
    </div>
  );

}

export default PhotoItem;