import { CONST } from '../constants';

export const loadPhoto = photos => ({
  type: CONST.LOAD_PHOTO,
  photos
});

export const like = id => ({  
  type: CONST.LIKE_PHOTO,
  id  
});

export const unlike = id => ({  
  type: CONST.UNLIKE_PHOTO,
  id  
});