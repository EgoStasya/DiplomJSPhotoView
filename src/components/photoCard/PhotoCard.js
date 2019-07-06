import React from 'react';

import Button from '../button/Button';

import './style.css';

const PhotoCard = props => {

  const { photo, changeLikePhotoStatus, goBack } = props;

  const userProfile = photo.user.links.html;
  const userProfileShort = userProfile.slice(21);
  const photoCreated = photo.created_at;  
  const photoCreatedShot = (new Date(photoCreated)).toLocaleDateString(); 
 
  return (
    <div className="photo-card">
      <Button
          className="btn-go-back"
          type ="button"
          text=""
          onClick={goBack}
        />      
      <img 
        className="photo-img-full"
        src={photo.urls.full}
        alt="photo" 
      />      
      <div className="photo-attribute clearfix">
        <span className="photo-card-author">{photo.user.name}</span>
        <Button
          className={photo.liked_by_user ? "btn-like-photo" : "btn-unlike-photo"}
          type ="button"
          text=""
          onClick={changeLikePhotoStatus}
        />
        <span className="photo-card-likes">{photo.likes}</span>        
      </div>  
      <p className="photo-card-links">
        <a href={photo.user.links.html}>{userProfileShort}</a>
      </p>     
      <p className="photo-card-date">{photoCreatedShot}</p>      
    </div>
  );
}

export default PhotoCard;