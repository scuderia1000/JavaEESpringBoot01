import {combineReducers} from 'redux';
import socketConnection from './socketConnection';
import message from './message';

export default combineReducers({
    socketConnection,
    message
});