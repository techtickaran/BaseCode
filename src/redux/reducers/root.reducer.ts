import {combineReducers} from 'redux';
import common from './common.reducer';
import auth from './auth.reducer';
export default combineReducers({
  common,
  auth,
});
