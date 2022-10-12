const init = {
    users: [
        { id: 0, name: 'dev' },
        { id: 1, name: 'frontend' },
    ],
    modalRedux: false,
};

function rootReducer(state = init, action) {
    switch (action.type) {
        case `DELETE_USER_REDUX`:
            return { ...state, users: [...state.users.filter((user) => user.id !== action.payload.id)] };
        case 'ADD_USER':
            let user = { id: state.users.length, name: 'random' };
            return { ...state, users: [...state.users, user] };
        case 'CLOSE':
            return { ...state, modalRedux: true };
        case 'OPEN':
            return { ...state, modalRedux: false };
        default:
            return state;
    }
}

export default rootReducer;
