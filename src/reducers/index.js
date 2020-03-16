import {combineReducers} from 'redux';
import fetchReducer from './fetchReducer';
import basketReducer from './basketReducer'
export default combineReducers({
    fetchReducer,
    basketReducer
});