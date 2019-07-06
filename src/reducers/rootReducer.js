import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import photoReducer from './photoReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  photoReducer
});

export default rootReducer;