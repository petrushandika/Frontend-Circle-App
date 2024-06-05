import { combineReducers } from '@reduxjs/toolkit';
import authReducer from "./slice/authSlice"
import threadReducer from './slice/threadSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    thread: threadReducer,
});

export default rootReducer;