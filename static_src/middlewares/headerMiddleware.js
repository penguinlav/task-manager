import { isRSAA, CALL_API } from 'redux-api-middleware';

// создаем функцию принимающую токе и возвращающую мидлварь, что бы добавлять Authorization хедер к нащим
// запросам от сервера
export const headerMiddleware = token => store => next => (action) => {
    console.log("headerMiddleware: action - " + action.type)

    if (isRSAA(action)){
        action[CALL_API]['headers'] = { 'Authorization': `token ${token}` };
    }
    return next(action);
};
