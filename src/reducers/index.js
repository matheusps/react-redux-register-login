import { combineReducers } from 'redux';

import auth from './auth';
import registration from './registration';
import user from './user';
import alert from './user';

const rootReducer = combineReducers({
  auth,
  registration,
  user,
  alert
});

export default rootReducer;