import update from 'react-addons-update';
import { START_TASK_LOADING, SUCCESS_TASK_LOADING, ERROR_TASK_LOADING } from './../actions/tasks';


const initialState = {
    taskList: [],
    tasks: {},
    isLoading: false,
};


export default function tasks(store = initialState, action) {
    console.log( "action function tasks, action: " + action.type)
    let newStore = store;

    if (action.payload && action.payload.entities && action.payload.entities.tasks) {
        newStore = update(store, {
            tasks: { $merge: action.payload.entities.tasks },
        });
    }

    switch (action.type) {
        case START_TASK_LOADING: {
            return update(newStore, {
                isLoading: { $set: true }
            });
        }
        case SUCCESS_TASK_LOADING: {
            return update(newStore, {
                isLoading: { $set: false },
                taskList: { $set: action.payload.result },
            });
        }
        case ERROR_TASK_LOADING: {
            return update(newStore, {
                isLoading: { $set: false },
            });
        }
        default:
            return newStore;
    }
    return newStore;
}
