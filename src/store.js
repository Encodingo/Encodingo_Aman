
import {configureStore} from '@reduxjs/toolkit'
import {profileReducer, userReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
import { teacherReducer } from './reducers/teacherReducer';
import { top3courseReducer } from './reducers/top3courseReducer';
import { top3teacherReducer } from './reducers/top3teacherReducer';
const store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course:courseReducer,
        admin: adminReducer,
        teacher:teacherReducer,
        topcourse:top3courseReducer,
        topteacher:top3teacherReducer
    }
});

export default store;

export const server = "http://localhost:4000/api/v1"
