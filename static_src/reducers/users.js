import update from 'react-addons-update';


const initialState = {
    users: {},
};


export default function users(store = initialState, action) {
    console.log( "action  function tasks, action: " + action.type)
    let newStore = store;
    if (action.payload && action.payload.entities && action.payload.entities.users) {
        newStore = update(store, {
            users: { $merge: action.payload.entities.users },
        });
    }
    switch (action.type) {
        default:
            return newStore;
    }
}
