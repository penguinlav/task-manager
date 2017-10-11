import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from './../middlewares';


function initStore(additionalMiddlewares = []) {
    const initialStore =
        {/*
            routerReducer: {
                location: {
                    pathname: '/tasks',
                    search: '',
                    hash: '',
                    key: 'ygysrm'
                }
            },
            tasks: {
                taskList: [
                    71,
                    72,
                    215
                ],
                tasks: {
                    '71': {
                        id: 71,
                        author: 35,
                        assign_to: null,
                        project: 28,
                        section: null,
                        text: 'OOkkk',
                        description: 'kkkkOOosf',
                        status: 1,
                        created_at: '2017-10-02T11:56:33.865068Z',
                        last_modified: '2017-10-02T11:56:33.865156Z'
                    },
                    '72': {
                        id: 72,
                        author: 35,
                        assign_to: null,
                        project: 28,
                        section: null,
                        text: 'Oh yeah',
                        description: 'Its work',
                        status: 1,
                        created_at: '2017-10-02T11:58:09.062212Z',
                        last_modified: '2017-10-02T11:58:09.062280Z'
                    },
                    '215': {
                        id: 215,
                        author: 35,
                        assign_to: 24,
                        project: 50,
                        section: null,
                        text: 'Виктор просто сделай',
                        description: 'Хоть что нибудь',
                        status: 1,
                        created_at: '2017-10-10T18:27:56.165020Z',
                        last_modified: '2017-10-10T18:27:56.165097Z'
                    }
                },
                isLoading: false
            },
            users: {
                users: {
                    '24': {
                        id: 24,
                        username: 'victor',
                        email: 'tvs.private@gmail.com',
                        first_name: 'Victor',
                        last_name: 'Tyunyakov',
                        avatar: null
                    },
                    '35': {
                        id: 35,
                        username: 'ternka',
                        email: '',
                        first_name: 'Popka',
                        last_name: 'Popkovich',
                        avatar: null
                    }
                }
            },
            SSR: {
                serverRendering: false
            }
        */};


    /* if ( !SERVER && window.__REDUX__SERVER__STORE__ ){
        initialStore = JSON.parse(window.__REDUX__SERVER__STORE__);
    } */
    const enhancerList = [applyMiddleware(...additionalMiddlewares, ...middlewares),];
    if (typeof (window) != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__()) {
        enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__())
    }
    const enhancers = compose(
        ...enhancerList
    );
    const store = createStore(initReducers, initialStore, enhancers);
    return store
}

export default initStore;
