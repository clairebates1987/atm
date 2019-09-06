import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import bank from './bankReducer';
import user from './userReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    bank,
    user
  });

export default createRootReducer;
