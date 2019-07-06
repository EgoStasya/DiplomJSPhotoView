import { CONST } from '../constants';

const photoReducer = (state = [], { type, photos, id }) => {
  switch(type) {
    case CONST.LOAD_PHOTO:
      return [
        ...state, 
          ...photos
      ];          

    case CONST.LIKE_PHOTO:
      return state.map(photo => {
        if (photo.id == id) {
          let { liked_by_user, likes } = photo;
          photo.liked_by_user = !liked_by_user;
          photo.likes = likes + 1;          
          return photo;
        }
        return photo;
      });         

    case CONST.UNLIKE_PHOTO:
      return state.map(photo => {
        if (photo.id == id) {
          let { liked_by_user, likes } = photo;
          photo.liked_by_user = !liked_by_user;
          photo.likes = likes - 1;
          return photo;
        }
        return photo;
      });          

    default:
      return state;
  }
};

export default photoReducer;