import { combineReducers } from 'redux';
import bank from './bankReducer';
import user from './userReducer';

export default combineReducers({
  bank,
  user
});
