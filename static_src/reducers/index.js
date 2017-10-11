import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tasks from './tasks';
import users from './users';
import SSR from './SSR';

export default combineReducers({
    routerReducer,
    tasks,
    users,
    SSR
});
