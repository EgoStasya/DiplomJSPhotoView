import Unsplash, { toJson } from 'unsplash-js';

import { CONST } from '../constants';

const unsplash = new Unsplash({
  applicationId: CONST.KEY_ID,
  secret: CONST.SECRET_ID,
  callbackUrl: CONST.CALLBACK_URL,
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'write_likes',
]);

export const setAccessTokenUnplash = code => {
  unsplash.auth.userAuthentication(code)
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.access_token)
    });
};

export const listPhoto = (page, perPage, access_token) => {
  unsplash.auth.setBearerToken(access_token);

  return unsplash.photos.listPhotos(page, perPage, 'latest')
    .then(toJson);
};

export const likePhoto = (id, token) => {
  unsplash.auth.setBearerToken(token);

  unsplash.photos.likePhoto(id)
    .then(toJson)    
};

export const unLikePhoto = (id, token) => {
  unsplash.auth.setBearerToken(token);

  unsplash.photos.unlikePhoto(id)
    .then(toJson)    
};