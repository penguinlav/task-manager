import { CALL_API, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';

import { task } from './../utils/schemas';

export const START_MEMBERS_LOADING = 'START_MEMBERS_LOADING';
export const SUCCESS_MEMBERS_LOADING = 'SUCCESS_MEMBERS_LOADING';
export const ERROR_MEMBERS_LOADING = 'ERROR_MEMBERS_LOADING';


export const loadMembers = (url) => {
    console.log("loadTasks url:" + url)
    return {
        [CALL_API]: {
            credentials: 'include',
            endpoint: url,
            method: 'GET',
            types: [
                START_MEMBERS_LOADING,
                {
                    type: SUCCESS_TASK_LOADING,
                    payload: (action, state, res) => {
                        return getJSON(res).then(
                            (json) => {
                                const normalizedData = normalize(json.results, [task]);
                                delete json.results;
                                console.log("loadTasks normalizer")
                                return Object.assign({}, json, normalizedData);
                            },
                        );
                    },
                },
                ERROR_TASK_LOADING,
            ],
        },
    };
};

























// import { CALL_API, apiMiddleware, getJSON } from 'redux-api-middleware';
// [CALL_API]: {
//     credentials: 'include',
//     endpoint: '/api/tasks/',
//     method: 'GET',
//     types: [
//         'REQUEST',
//         {
//             type: 'SUCCESS',
//             payload: (action, state, res) => {
//                 return getJSON(res).then(
//                     (json) => {
//                         const normalizedData = normalize(json.results, [task]);
//                         delete json.results;
//                         return Object.assign({}, json, normalizedData);
//                     },
//                 );
//             },
//         },
//         'FAILURE',
//     ],
// },
