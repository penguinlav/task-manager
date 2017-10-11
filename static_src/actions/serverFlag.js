import { CALL_API, getJSON } from 'redux-api-middleware';
import { normalize } from 'normalizr';

import { task } from './../utils/schemas';


export const SET_SSR_FLAG = 'SET_SSR_FLAG';


export const serverFlag = () => {
    return {
        type: SET_SSR_FLAG,
    };
};
