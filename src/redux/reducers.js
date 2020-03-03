import {  combineReducers } from 'redux';
import dashboardReducer from '../components/Home/dashboardReducer';
import rootReducer from './rootReducer';

export default combineReducers({
  dashboardReducer,
  rootReducer
})
